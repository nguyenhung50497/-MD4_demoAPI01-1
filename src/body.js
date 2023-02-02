showBody();
function showBody() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
        $('#mainBody').html(`
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="css/main.css">
        <div id="container-login">
            <div id="title">
                <i class="material-icons lock">lock</i> Login
            </div>

            <form>
                <div class="input">
                    <div class="input-addon">
                        <i class="material-icons">face</i>
                    </div>
                    <input id="username" name="username" placeholder="Username" type="text" required class="validate" autocomplete="off">
                </div>
                <p id="alert"  style="height: 10px;"></p>

                <div class="clearfix"></div>

                <div class="input">
                    <div class="input-addon">
                        <i class="material-icons">vpn_key</i>
                    </div>
                    <input id="password" name="password" placeholder="Password" type="password" required class="validate" autocomplete="off">
                </div>
                <p id="wrongPass"  style="height: 10px;"></p>

                <button type="button" class="btn btn-secondary" onclick="login()">Login</button>
            </form>

            <div class="privacy">
                <a href="#">Privacy Policy</a>
            </div>

            <div class="register">
                Don't have an account yet?
                <button id="register-link" onclick="showFormRegister()">Register here</button>
            </div>
        </div>
        `);
    } else {
        let html = ``;
        html += `
            <!-- Navigation -->
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
                <div class="container">
                    
                    <!-- Image Logo -->
                    <a class="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a>  
        
                    <!-- Text Logo - Use this if you don't have a graphic logo -->
                    <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Mark</a> -->
        
                    <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                    <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <input class="form-control ms-5" id="search" type="search" placeholder="Search" aria-label="Search" onkeyup="searchProduct(this.value)" style="width: 500px;">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <button class="btn btn-outline-none" onclick="showHome()"><a class="nav-link page-scroll" >Home <span class="sr-only">(current)</span></a></button>
                            </li>`;
        if (token.role === 'admin') {
            html +=`
                    <li class="nav-item">
                        <button class="btn btn-outline-none" onclick="showFormAdd()"><a class="nav-link page-scroll">Add</a></button>
                    </li>
                `;
        }
        html += `
                            <li class="nav-item dropdown">
                                <button class="btn btn-outline-none"><a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a></button>
                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <a class="dropdown-item page-scroll" href="project.html">Project Details</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-outline-none"><a class="nav-link page-scroll text-primary" onclick="logout()">Log out</a></button>
                            </li>
                        </ul>
                        <span class="nav-item social-icons">
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                        </span>
                    </div> <!-- end of navbar-collapse -->
                </div> <!-- end of container -->
            </nav> <!-- end of navbar -->
            <!-- end of navigation -->
        
        
            <!-- Header -->
            <header id="header" class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="text-container">
                                <h1 class="h1-large">Fresh Fruits And Fresh Vegetables</h1>
                                <a class="btn-solid-lg page-scroll" href="#body">WOW</a>
                                <a class="btn-outline-lg page-scroll" href="#contact"><i class="fas fa-user"></i>Contact Me</a>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                </div> <!-- end of container -->
            </header> <!-- end of header -->
            <!-- end of header -->
        
        
            <div class="container mt-5 mb-5" id="body" >
                
            </div>
            
            
            <!-- Works -->
            <div class="basic-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/work-1.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Zigoland, <strong>Project:</strong> started a new website from ground up for a new product <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                        <div class="col-lg-4">
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/work-2.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Visodream, <strong>Project:</strong> developed a new forum for the Visodream community <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                        <div class="col-lg-4">
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/work-3.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Primoday, <strong>Project:</strong> complete redesign of their corporate website and platform <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/work-4.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Nextlite, <strong>Project:</strong> created a custom video editing and upload web app <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                        <div class="col-lg-4">
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/work-5.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Syncnow, <strong>Project:</strong> web design for their corporate websites and landing pages <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                        <div class="col-lg-4">
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/work-6.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Shifter, <strong>Project:</strong> started a new website from ground up for a new product <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                </div> <!-- end of container -->
            </div> <!-- end of basic-4 -->
            <!-- end of works -->
        
        
            <!-- Projects -->
            <div id="projects" class="basic-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="h2-heading">Delivered projects</h2>
                            <p class="p-heading">Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/project-1.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Jumbotron, <strong>Project:</strong> web design for their corporate websites and landing pages for marketing campaigns <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/project-2.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Carsrepo, <strong>Project:</strong> designed and developed modern platform for purchasing second hand cars online <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/project-3.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Truevideo, <strong>Project:</strong> created a custom video editing and upload web app for this awesome team <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                            <div class="text-container">
                                <div class="image-container">
                                    <a href="project.html">
                                        <img class="img-fluid" src="images/project-4.jpg" alt="alternative">
                                    </a>
                                </div> <!-- end of image-container -->
                                <p><strong>For:</strong> Evolosim, <strong>Project:</strong> complete redesign of their corporate website and platform update for their online shop <a class="blue" href="project.html">details</a></p>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                </div> <!-- end of container -->
            </div> <!-- end of basic-3 -->
            <!-- end of projects -->
        
        
            <!-- Services -->
            <div id="services" class="basic-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="h2-heading">Offered services</h2>
                            <p class="p-heading">Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</p>
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="text-box">
                                <i class="far fa-gem"></i>
                                <h4>DESIGN</h4>
                                <p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
                            </div> <!-- end of text-box -->
                        </div> <!-- end of col -->
                        <div class="col-lg-4">
                            <div class="text-box">
                                <i class="fas fa-code"></i>
                                <h4>DEVELOPMENT</h4>
                                <p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
                            </div> <!-- end of text-box -->
                        </div> <!-- end of col -->
                        <div class="col-lg-4">
                            <div class="text-box">
                                <i class="fas fa-tv"></i>
                                <h4>BASIC SEO</h4>
                                <p>i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money</p>
                            </div> <!-- end of text-box -->
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                </div> <!-- end of container -->
            </div> <!-- end of basic-2 -->
            <!-- end of services -->
        
        
            <!-- Footer -->
            <div class="footer bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="social-container">
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-twitter fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-pinterest-p fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-instagram fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-youtube fa-stack-1x"></i>
                                    </a>
                                </span>
                            </div> <!-- end of social-container -->
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                </div> <!-- end of container -->
            </div> <!-- end of footer -->  
            <!-- end of footer -->
        
        
            <!-- Copyright -->
            <div class="copyright bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="p-small">Copyright © <a class="no-line" href="#your-link">Your name</a></p>
                        </div> <!-- end of col -->
                    </div> <!-- enf of row -->
                </div> <!-- end of container -->
        
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="p-small">Distributed By <a class="no-line" href="https://themewagon.com/">Themewagon</a></p>
                        </div> <!-- end of col -->
                    </div> <!-- enf of row -->
                </div> <!-- end of container -->
                
            </div> <!-- end of copyright --> 
            <!-- end of copyright -->
        `
        $('#mainBody').html(html);
    }
}