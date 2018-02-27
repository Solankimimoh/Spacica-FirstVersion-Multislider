<?php
session_start();

?>


    <!DOCTYPE html>
    <html lang="en" class="body-full-height">


    <head>
    <?php
    
    if(isset($_SESSION['login_user']))
    {
        ?>


            <script type="application/javascript">
                window.location.href = "home.php"

            </script>
            <?php
        
    }
    else
    {
        
    }
    
    ?>

                <!-- META SECTION -->
                <title>Spacica | Admin Login</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="favicon.ico" type="image/x-icon" />
                <!-- END META SECTION -->

                <!-- CSS INCLUDE -->
                <link rel="stylesheet" type="text/css" id="theme" href="css/theme-default.css" />

                <!-- EOF CSS INCLUDE -->
    </head>

    <body>

        <div class="login-container">

            <div class="login-box animated fadeInDown">

                <div class="login-body" style="margin-top:6 0px;">
                    <div class="login-title"><strong>Spacica</strong>, Please login</div>
                    <form action="logincode.php" class="form-horizontal" method="post">
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="text" class="form-control" placeholder="Username" name="username" value="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="password" class="form-control" placeholder="Password" name="password" value="" />
                            </div>
                        </div>
                        <div class="form-group">
                            
                            <div class="col-md-6">
                                <input class="btn btn-info btn-block" type="submit" name="submitlogin" value="Log In"> 
                                
                            </div>
                        </div>
                    </form>
                </div>
                <div class="login-footer">
                    <div class="pull-left">
                        &copy; 2017 Spacica
                    </div>

                </div>
            </div>

        </div>



    </body>

    <!-- Mirrored from themifycloud.com/demos/templates/joli/pages-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 19 Mar 2017 09:42:21 GMT -->

    </html>
