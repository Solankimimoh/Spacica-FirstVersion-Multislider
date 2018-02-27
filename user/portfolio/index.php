<!doctype html>

<html lang="en-US">
<!--<![endif]-->


<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<!-- /Added by HTTrack -->

<head>


    <?php
	include('../includes/dbfunctions.php');

$db = new DB_FUNCTIONS();
	
	?>
        <meta charset="utf-8">

        <!-- Google Chrome Frame for IE -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <title>Spacica | Portfolio</title>

        <link rel="stylesheet" href="../css/style.css">
        

        <!-- mobile meta (hooray!) -->
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    

                <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
                <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate.js"></script>
                <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.2.1.js"></script>
                <link href="../css/bootpopup.css" rel="stylesheet">

                <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>

        <!-- Bootstrap Core CSS -->
                <link href="../css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom CSS -->
                <link href="../css/thumbnail-gallery.css" rel="stylesheet">
                <link href="../wp-content/themes/foundry/library/style.css" rel="stylesheet">

                <script type="text/javascript" src="../../fast.fonts.net/jsapi/9b79e2f4-02f0-4c4a-8596-5167d46dcab0.js"></script>
        <!-- end of wordpress head -->


    <style type="text/css">


ul
{
    width: 100%;
  padding: 0;
  margin: 0 0 2em 0;
  list-style-type: none;
}

.gallery
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

.gallery a
{
  display: block;
  width: 100%;
  overflow: hidden;
}

.gallery img
{
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  -webkit-transition: all 2s ease-out;
  transition: all 2s ease-out;
}

.gallery a:hover img, .gallery a:focus img
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
</head>

<body ng-app="myApp" ng-controller="myCtrl" class="home blog front" style="overflow-y: auto;background: rgba(221, 221, 221, 0.278431);" >



    <header class="header" role="banner" style="background: rgb(245, 245, 245); ">

        <div id="inner-header" class=" clearfix">

            <!-- to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> -->


            <p id="logo" class="h1">
                <object type="image/png" data="../images/logo.png">
						spacica
					</object>
                <a href="../index.php" rel="nofollow"><span>spacica</span></a></p>

            <!-- if you'd like to use the site description you can un-comment it below -->

            <nav role="navigation">
                <ul id="menu-main-menu" class="nav top-nav clearfix">
                    <li id="menu-item-79" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-79"><a href="index.php">Portfolio</a></li>
                    <li id="menu-item-17" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"><a href="../contact/index.php">Contact</a></li>
                </ul>
            </nav>


        </div>
        <!-- end #inner-header -->

    </header>
    <!-- end header -->


    <div id="container" class="container" style="margin-top: 90px;">


        <div class="row">

            <div class="col-lg-12">
                <h1 class="page-header"></h1>
                <a href="../index.php" class="button-close">x</a>
            </div>


            <?php include 'gallery.php';  ?>


        </div>


        <footer class="footer" role="contentinfo">

            <div id="inner-footer" class="wrap clearfix">

            </div>
            <!-- end #inner-footer -->

        </footer>
        <!-- end footer -->

    </div>
    <!-- end #container -->
    

    <script type="text/javascript" src="../../admin/js/plugins/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="../../admin/js/plugins/jquery/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../../admin/js/plugins/bootstrap/bootstrap.min.js"></script>
    
    
    <script type="text/javascript" src="../../admin/js/plugins.js"></script>
    <script type="text/javascript" src="../../admin/js/actions.js"></script>

<!--    <script src="../js/jquery-2.1.3.min.js"></script>-->
    <!--            <script src="../js/idangerous.swiper.min.js"></script>-->


    <script src="../js/global.js"></script>
    <!--    <script src="../js/swiper.js"></script>-->
    <!--    <script src="../js/swiper.jquery.js"></script>-->
    <!--    <script src="../js/swiper.jquery.min.js"></script>-->

    <!-- Initialize Swiper -->



</body>


</html>
