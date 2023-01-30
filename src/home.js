showHome();

function showList() {
    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/products',
        headers : {
            'Content-Type': 'application/json',
        },
        success: (products) => {
            let html = ``;
            products.map((item) => {
                html += `
                <tr>
                    <th scope="row">${item.id}</th>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.image}</td>
                    <td>${item.category}</td>
                    <td>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal${item.id}">Edit</button>
                        <div class="modal fade" id="editModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit ${item.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping">Name</span>
                                    <input type="text" class="form-control" id="name${item.id}" value="${item.name}" aria-label="Username" aria-describedby="addon-wrapping">
                                </div>
                                <br>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping">Price</span>
                                    <input type="text" class="form-control" id="price${item.id}" value="${item.price}" aria-label="Username" aria-describedby="addon-wrapping">
                                </div>
                                <br>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping">Image</span>
                                    <input type="text" class="form-control" id="image${item.id}" value="${item.image}" aria-label="Username" aria-describedby="addon-wrapping">
                                </div>
                                <br>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping">Category</span>
                                    <input type="text" class="form-control" id="category${item.id}" value="${item.category}" aria-label="Username" aria-describedby="addon-wrapping">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="editProduct(${item.id})">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${item.id}">Delete</button>
                        <div class="modal fade" id="deleteModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Delete ${item.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to delete???
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteProduct(${item.id})">Yes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </td>
                </tr>`;
            });
            $('#tbody').html(html);
        }
    })
}

function showHome() {
    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/products',
        headers : {
            'Content-Type': 'application/json',
        },
        success: () => {
            let html = `
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Category</th>
                        <th scope="col" colspan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>`;
            $('#body').html(html);
            showList();
        }
    })
}

function showFormAdd() {
    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/products',
        headers : {
            'Content-Type': 'application/json',
        },
        success: () => {
            let html = `
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Name</span>
                <input type="text" class="form-control" id="name" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Price</span>
                <input type="text" class="form-control" id="price" placeholder="Price" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Image</span>
                <input type="text" class="form-control" id="image" placeholder="Image" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Category</span>
                <input type="text" class="form-control" id="category" placeholder="Category" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <button class="btn btn-primary" onclick="addProduct()">Save</button>
            `;
            $('#body').html(html);
        }
    })
}

function addProduct() {
    let name = $('#name').val();
    let price = $('#price').val();
    let image = $('#image').val();
    let category = $('#category').val();
    let product = {
        name: name,
        price: price,
        image: image,
        category: category
    }
    console.log(JSON.stringify(product));
    $.ajax({
        type: "POST",
        url: 'http://localhost:3000/products',
        data: JSON.stringify(product),
        headers : {
            'Content-Type': 'application/json',
        },
        success: () => {
            alert('Product added successfully');
            showHome();
        }
    })
}

function deleteProduct(id) {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/products/${id}`,
        headers : {
            'Content-Type': 'application/json',
        },
        success: () => {
            alert('Delete product successfully');
            showHome();
        }
    })
}

function editProduct(id) {
    let name = $(`#name${id}`).val();
    let price = $(`#price${id}`).val();
    let image = $(`#image${id}`).val();
    let category = $(`#category${id}`).val();
    let product = {
        name: name,
        price: price,
        image: image,
        category: category
    }
    console.log(product);
    $.ajax({
        type: "PUT",
        url: `http://localhost:3000/products/${id}`,
        data: JSON.stringify(product),
        headers : {
            'Content-Type': 'application/json',
        },
        success: () => {
            alert('Edit product successfully');
            showHome();
        }
    })
}