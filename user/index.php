<?php
session_start();
?>
<?php
include("includes/dbfunctions.php");
$db = new DB_FUNCTIONS();


?>

<!doctype html>

<!--[if lt IE 7]><html lang="en-US" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html lang="en-US" class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html lang="en-US" class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en-US" class="no-js">
<!--<![endif]-->


<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<!-- /Added by HTTrack -->

<head>
    <meta charset="utf-8">

    <!-- Google Chrome Frame for IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>Spacica | Home</title>


    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


    <!-- wordpress head functions -->

    <!-- Custom CSS -->
    <link href="css/full-slider.css" rel="stylesheet">
    <link href="css/bodotstrap.min.css" rel="stylesheet">

    <link rel='stylesheet' id='bones-stylesheet-css' href='wp-content/themes/foundry/library/style.css' type='text/css' media='all' />
    <!--[if lt IE 9]>
<link rel='stylesheet' id='bones-ie-only-css'  href='http://wallawallafoundry.com/wp-content/themes/foundry/library/ie.css' type='text/css' media='all' />
<![endif]-->

</head>

<body class="home blog front">

    <div id="container" class="wrap">

        <header class="header" role="banner">

            <div id="inner-header" class=" clearfix">

                <!-- to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> -->
                <p id="logo" class="h1">
                    <object type="image/png" data="images/logo.png">
						spacica
					</object>
                    <a href="index.html" rel="nofollow"><span>spacica</span></a></p>

                <!-- if you'd like to use the site description you can un-comment it below -->

                <nav role="navigation">
                    <ul id="menu-main-menu" class="nav top-nav clearfix">
                        <li id="menu-item-79" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-79"><a href="portfolio/index.php" style="color:white">Portfolio</a></li>
                        <li id="menu-item-17" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"><a href="contact/index.php" style="color:white">Contact</a></li>
                    </ul>
                </nav>


            </div>
            <!-- end #inner-header -->

        </header>
        <!-- end header -->

        <!--
		<div id="content">

			<div id="inner-content" class="reveal clearfix">

				<div id="main" class="slides twelvecol first clearfix" role="main">
				
-->
        <!-- Full Page Image Background Carousel Header -->
        <header id="myCarousel" class="carousel slide">
            <!-- Indicators -->
            <!--
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
-->

            <!-- Wrapper for Slides -->
            <div class="carousel-inner">

                <?php
            
            $sliderdata = "SELECT * FROM `slider`";
            
            $result = mysqli_query($db->con,$sliderdata);
            
            $i=0;
            while($row=mysqli_fetch_row($result))
            {
                
                if($i==0)
                {
                    $i++;
                    ?>
                    <div class="item active">
                        <!-- Set the first background image using inline CSS below. -->
                        <div class="fill" style="background-image:url('../admin/uploads/slider/<?php echo $row[2]; ?>');"></div>
                        <div class="carousel-caption">
                            <h4 style="width: 30%;line-height: 1.6;"><?php echo $row[1]; ?></h4>
                        </div>
                    </div>

                    <?php
                    
                }
                else
                {
                    ?>
                        <div class="item">
                            <!-- Set the second background image using inline CSS below. -->
                            <div class="fill" style="background-image:url('../admin/uploads/slider/<?php echo $row[2]; ?>');"></div>
                            <div class="carousel-caption">
                                <h4 style="width: 30%;line-height: 1.6;"><?php echo $row[1]; ?></h4>
                            </div>
                        </div>
                
                        <?php
                    
                }
                
            }
            
            ?>





            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="icon-prev"></span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="icon-next"></span>
            </a>

        </header>


        <!--				</div>-->
        <!-- end #main -->


        <!--			</div>-->
        <!-- end #inner-content -->

        <!--		</div>-->
        <!-- end #content -->

        <footer class="footer" role="contentinfo">

            <div id="inner-footer" class="wrap clearfix">

            </div>
            <!-- end #inner-footer -->

        </footer>
        <!-- end footer -->

    </div>
    <!-- end #container -->

    <!-- all js scripts are loaded in library/bones.php -->
    <!--		<script>window.jQuery.migrateMute || document.write('<script src="wp-includes/js/jquery/jquery-migrate.min.js"><\/script>')</script>-->
    <!--
	<script type='text/javascript' src='wp-content/themes/foundry/library/vendor.js'></script>
	<script type='text/javascript' src='wp-content/themes/foundry/library/scripts.js'></script>
-->
    <!--	<script type='text/javascript' src='wp-includes/js/wp-embed.min.js'></script>-->
    <!--
<script type='text/javascript' src='../vjs.zencdn.net/4.5/video.js'></script>
<script type='text/javascript' src='wp-content/plugins/videojs-html5-video-player-for-wordpress/videojs/vjs.youtube.js'></script>
-->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Script to Activate the Carousel -->
    <script>
        $('.carousel').carousel({
            interval: 5000 //changes the speed
        })

    </script>
</body>

</html>
<!-- end page. what a ride! -->
