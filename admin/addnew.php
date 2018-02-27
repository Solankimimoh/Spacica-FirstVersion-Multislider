<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>


    <?php

    if(isset($_SESSION['login_user']))
    {

    }
    else
    {
          ?>


        <script type="application/javascript">
            window.location.href = "index.php"

        </script>
        <?php

    }

    ?>

            <!-- META SECTION -->
            <title>Spacica | New Product</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="icon" href="favicon.ico" type="image/x-icon" />
            <!-- END META SECTION -->

            <script src="css/jquery.min.js"></script>
            <link href="Demo/css/fileinput.css" media="all" rel="stylesheet" type="text/css" />
            <script src="Demo/js/fileinput.js" type="text/javascript"></script>
            <script type="text/javascript" src="js/plugins/bootstrap/bootstrap.min.js"></script>



            <!-- CSS INCLUDE -->
            <link rel="stylesheet" type="text/css" id="theme" href="css/theme-default.css" />
            <link href="css/bootstrap.min.css" rel="stylesheet">

            <!-- EOF CSS INCLUDE -->


</head>

<body>
    <!-- START PAGE CONTAINER -->
    <div class="page-container">

        <!-- START PAGE SIDEBAR -->
        <div class="page-sidebar">
            <!-- START X-NAVIGATION -->
            <ul class="x-navigation">
                <li class="xn-logo">
                    <a href="index-2.html">Admin</a>
                    <a href="#" class="x-navigation-control"></a>
                </li>
                <li class="xn-profile">
                    <a href="#" class="profile-mini">
                        <img src="assets/images/users/avatar.jpg" alt="John Doe" />
                    </a>
                    <div class="profile">
                        <div class="profile-image">
                            <img src="assets/images/users/avatar.jpg" alt="John Doe" />
                        </div>
                        <div class="profile-data">
                            <div class="profile-data-name">XYZ NAME</div>
                            <div class="profile-data-title">Designer for steel</div>
                        </div>

                    </div>
                </li>
                <li class="xn-title">Menu</li>

                <li class="xn-openable">
                    <a href="#"><span class="fa fa-files-o"></span> <span class="xn-text">Pages</span></a>
                    <ul>
                        <li><a href="home.php"><span class="fa fa-image"></span> Gallery</a></li>
                        <li>
                            <a href="imgslider.php"><span class="fa fa-image"></span>ADD Image Slider</a>
                        </li>
                        <li>
                            <a href="viewslider.php"><span class="fa fa-image"></span>View Image Slider</a>
                        </li>



                    </ul>
                </li>



            </ul>
            <!-- END X-NAVIGATION -->
        </div>
        <!-- END PAGE SIDEBAR -->

        <!-- PAGE CONTENT -->
        <div class="page-content">

            <!-- START X-NAVIGATION VERTICAL -->
            <ul class="x-navigation x-navigation-horizontal x-navigation-panel">
                <!-- TOGGLE NAVIGATION -->
                <li class="xn-icon-button">
                    <a href="#" class="x-navigation-minimize"><span class="fa fa-dedent"></span></a>
                </li>
                <!-- END TOGGLE NAVIGATION -->
                <!-- SEARCH -->

                <!-- END SEARCH -->
                <!-- SIGN OUT -->
                <li class="xn-icon-button pull-right">
                    <a href="#" class="mb-control" data-box="#mb-signout"><span class="fa fa-sign-out"></span></a>
                </li>
                <!-- END SIGN OUT -->
                <!-- MESSAGES -->

                <!-- END MESSAGES -->
                <!-- TASKS -->

                <!-- END TASKS -->
            </ul>
            <!-- END X-NAVIGATION VERTICAL -->

            <!-- START BREADCRUMB -->

            <!-- END BREADCRUMB -->

            <!-- START CONTENT FRAME -->
            <div class="content-frame">




                <!-- START CONTENT FRAME BODY -->
                <div class="content-frame-body content-frame-body-left">

                    <section class="content">

                        <!-- general form elements -->
                        <div class="box box-primary" style="margin-left:30px;margin-bottom: 70px;">
                            <div class="box-header with-border">
                                <h3 class="box-title"><b>Add a new Product</b></h3>
                            </div>
                            <!-- /.box-header -->
                            <!-- form start --><br/>
                            <form method="post" enctype="multipart/form-data" action="insertphoto.php">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Product Title</label>
                                        <input type="text" name="i_name" class="form-control" id="exampleInputEmail1" placeholder="Enter product Name" required>
                                    </div>



                                    <div class="form-group">
                                        <label for="exampleInputEmail1">product Description </label>
                                        <textarea maxlength="1800" class="form-control" name="i_desc" rows="5" required></textarea>
                                    </div>

                                    <div class="">

                                        <input required id="file-fr" name="file-fr[]" type="file" multiple>

                                    </div>


                                </div>
                                <!-- /.box-body -->

                                <br/>
                                <div class="box-footer">
                                    <!--									<button type="submit" name="submit" class="btn btn-primary" href="insertphoto.php".php>Add</button>-->
                                    <input class="btn btn-primary" type="submit" name="submit" value="submit">

                                </div>
                            </form>
                        </div>
                        <!-- /.box -->


                    </section>
                    <!-- END CONTENT FRAME BODY -->
                </div>
                <!-- END CONTENT FRAME -->

            </div>
            <!-- END PAGE CONTENT -->
        </div>

        <!-- END PAGE CONTAINER -->

        <!-- BLUEIMP GALLERY -->
        <div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">
            <div class="slides"></div>
            <h3 class="title"></h3>
            <a class="prev">‹</a>
            <a class="next">›</a>
            <a class="close">×</a>
            <a class="play-pause"></a>
            <ol class="indicator"></ol>
        </div>
        <!-- END BLUEIMP GALLERY -->

    </div>



    <!-- MESSAGE BOX-->
    <div class="message-box animated fadeIn" data-sound="alert" id="mb-signout">
        <div class="mb-container">
            <div class="mb-middle">
                <div class="mb-title"><span class="fa fa-sign-out"></span> Log <strong>Out</strong> ?</div>
                <div class="mb-content">
                    <p>Are you sure you want to log out?</p>
                    <p>Press No if youwant to continue work. Press Yes to logout current user.</p>
                </div>
                <div class="mb-footer">
                    <div class="pull-right">
                        <a href="logout.php" class="btn btn-success btn-lg">Yes</a>
                        <button class="btn btn-default btn-lg mb-control-close">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END MESSAGE BOX-->


    <script>
        $('#file-fr').fileinput({
            language: 'fr',
            uploadUrl: '#',
            allowedFileExtensions: ['jpg', 'png', 'gif', 'jpeg']
        });

    </script>


    <!-- START PLUGINS -->
    <script type="text/javascript" src="js/plugins/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="js/plugins/jquery/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/plugins/bootstrap/bootstrap.min.js"></script>


    <!-- END PLUGINS -->
    <script type="text/javascript" src="js/plugins.js"></script>
    <script type="text/javascript" src="js/actions.js"></script>

</body>

</html>
