Vue.component('header-tag', {
    template: `<div class="container-fluid header">
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" id="od_home" href="home.html" title="OPENS DRM"><img src="img/logo.png" alt="OPENS DRM"></a>
            <button class="navbar-toggler" id="od_nav_list" type="button" data-toggle="collapse" data-target="#opensDRM_navbar" aria-controls="opensDRM_navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="btn_menu">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="opensDRM_navbar">
                <ul class="navbar-nav n_typo">
                    <li class="nav-item active">
                        <a class="nav-link" id="od_guide" href="guide.html">
                            <span>Developer's Guide</span> 
                        </a>  
                    </li>
                    <li class="nav-item dropdown">
                        <a data-toggle="dropdown" class="nav-link" id="od_tutorials" href="encryption.html">
                            <span>Tutorials</span>
                            <i class="ftl icon-down-open"></i> 
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li role="presentation"><a role="menuitem" tabindex="-1" id="od_encryption" href="encryption.html">Encryption</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" id="od_license" href="license.html">License Generation</a></li>
                        </ul>
                    </li>

                    <!-- L2 회원에게만 노출되는 메뉴 : 시작 -->
                    <li class="nav-item">
                        <a class="nav-link" id="od_management" href="management.html">
                            <span>Management</span>
                        </a>  
                    </li>
                    <!-- L2 회원에게만 노출되는 메뉴 : 끝 -->

                    <li class="nav-item">
                        <a class="nav-link" id="od_faq" href="#">
                            <span>FAQ</span> 
                        </a>  
                    </li>
                </ul>
                <div class="dropdown-divider"></div>
                <ul class="navbar-nav n_icon">
                    <!-- 로그인 전 메뉴 : 시작 -->
                    <li class="nav-item nav_ic">
                        <a class="nav-link" id="od_register" href="register.html" title="Register">
                            <i class="icon-user-add-outline"></i>
                            <span>Register</span>
                        </a>
                    </li>
                    <li class="nav-item nav_ic">
                        <a class="nav-link" id="od_login" href="login.html" title="Login">
                            <i class="icon-login"></i>
                            <span>Login</span>
                        </a>
                    </li>
                    <!-- 로그인 전 메뉴 : 끝 -->

                    <!-- 로그인 후 메뉴 : 시작 -->
                    <!--<li class="nav-item nav_ic">
                        <a class="nav-link" id="od_myInfo" href="myInfo.html" title="My Info">
                            <i class="icon-user-outline"></i>
                            <span>My Info</span>
                        </a>
                    </li>
                    <li class="nav-item nav_ic">
                        <a class="nav-link" id="od_logout" href="#" title="Logout">
                            <i class="icon-logout"></i>
                            <span>Logout</span>
                        </a>
                    </li>-->
                    <!-- 로그인 후 메뉴 : 끝 -->                           
                </ul>
            </div>
        </div> 
    </nav>
</div>`
})