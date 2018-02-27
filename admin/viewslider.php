<?php
session_start();

?>


<!DOCTYPE html>
<html lang="en">

<head>



    <?php
	include('includes/dbfunctions.php');

    $db = new DB_FUNCTIONS();
	
	?>




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
                <title>Spacica | Home</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />


                <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
                <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate.js"></script>
                <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.2.1.js"></script>
                <link href="../user/css/bootpopup.css" rel="stylesheet">

                <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>


                <link rel="stylesheet" href="../user/css/style.css">

                <link rel="icon" href="favicon.ico" type="image/x-icon" />
                <!-- END META SECTION -->

                <!-- CSS INCLUDE -->
                <link rel="stylesheet" type="text/css" id="theme" href="css/theme-default.css" />


    <style type="text/css">


ul
{
 
  width: 100%;
  padding: 0;
  margin: 0 0 2em 0;
  list-style-type: none;
}

.gallery2
{
  float: left;
  width: 33.3%;
  padding: 0;
  margin: 0;
  background-color: #000;
  border: 10px solid #fff;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.gallery2 a
{
  display: block;
  width: 100%;
  overflow: hidden;
}

.gallery2 img
{
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  -webkit-transition: all 2s ease-out;
  transition: all 2s ease-out;
}

.gallery2 a:hover img, .gallery2 a:focus img
{
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

#aspect li a
{
  position: relative;
  height: 0;
  padding-top: 56.25%;
}

#aspect img
{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

    </style>

                <!-- EOF CSS INCLUDE -->
</head>

<body style="overflow-y:auto;" ng-app="myApp" ng-controller="myCtrl">
    <!-- START PAGE CONTAINER -->
    <div class="page-container">

        <!-- START PAGE SIDEBAR -->
        <div class="page-sidebar">
            <!-- START X-NAVIGATION -->
            <ul class="x-navigation">
                <li class="xn-logo">
                    <a href="home.php">Admin</a>
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
                            <div class="profile-data-name">XYZ</div>
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

                <!-- START CONTENT FRAME TOP -->
                <div class="content-frame-top">

                    <div class="pull-right">
                        <a class="btn btn-primary" href="addnew.php"><span class="fa fa-upload"></span> Upload</a>
                        <button class="btn btn-default content-frame-right-toggle"><span class="fa fa-bars"></span></button>
                    </div>
                </div>

                <!-- START CONTENT FRAME RIGHT -->

                <!-- END CONTENT FRAME RIGHT -->

                <!-- START CONTENT FRAME BODY -->
                <div class="content-frame-body content-frame-body-left">

                    <div class="pull-left push-up-10">
                    </div>
                    <div class="pull-right push-up-10">

                    </div>

                    <div class="row">

                        <div class="col-lg-12">
                            <h1 class="page-header">Product Gallery</h1>
                        </div>


                        <table style="font-size: 15px;background: white;font-weight: 500;"   class="table table-responsive table-hover" border="1">
                        
                            <tr>
                            <td width="300"><b>Image Description</b></td>
                            <td><b>Image Name</b></td>
                            <td><b>Image View</b></td>
                            <td><b>Image Delete</b></td>
                            </tr>
                             <?php
            
            $sliderdata = "SELECT * FROM `slider`";
            
            $result = mysqli_query($db->con,$sliderdata);
            
            
            while($row=mysqli_fetch_row($result))
            {
                ?>
                            
                            <tr>
                                <td><?php echo $row[1]; ?></td>
                                <td><?php echo $row[2]; ?></td>
                                <td><img width="300" src="uploads/slider/<?php echo $row[2]; ?>"/> </td>
                                <td><a href="deleteslider.php?id=<?php echo $row[0]; ?>"><img width="50" src="img/delete.png"/> </a></td>
                            
                            
                            </tr>
                            
                            
                            <?php
                
            }
                            ?>
                        </table>


                    </div>

                </div>
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

    <!-- START PRELOADS -->
    <audio id="audio-alert" src="audio/alert.mp3" preload="auto"></audio>
    <audio id="audio-fail" src="audio/fail.mp3" preload="auto"></audio>
    <!-- END PRELOADS -->

    <!-- START SCRIPTS -->
    <!-- START PLUGINS -->
    <script type="text/javascript" src="js/plugins/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="js/plugins/jquery/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/plugins/bootstrap/bootstrap.min.js"></script>
    <!-- END PLUGINS -->

    <!-- START TEMPLATE -->


    <script type="text/javascript" src="js/plugins.js"></script>
    <script type="text/javascript" src="js/actions.js"></script>
    <!-- END TEMPLATE -->




    <script src="../user/js/global.js"></script>



</body>


</html>
