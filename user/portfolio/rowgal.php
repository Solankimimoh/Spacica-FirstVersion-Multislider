<?php


$products = $db->allProducts();


?>


    <?php

	if(count($products)>0) {
		foreach($products as $pro) {
			$productPhoto = $db->getproductPhoto($pro['userid']);



			?>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb ">
            <a class="thumbnail open-product" href="" onclick="getdata('<?php echo $pro['userid']  ?>')">
                <img width="400" height="300" class="img-responsive" src="../../admin/uploads/<?php echo $productPhoto; ?>" alt="">
            </a>
        </div>


        <?php

		}
	}
	else
	{
		?>
        <h2 style="margin: 30px;">No image available!</h2>

        <?php
	}
			?>


        <script type="application/javascript">
            var imgdata;

            function getdata(uid) {
                var id = uid;
                jQuery.ajax({
                    type: "GET",
                    url: "imagedata.php",
                    data: {
                        uid: id
                    },
                    error: function(result) {
                        alert("Error occured ! Try again later.");
                        $('.likeThis').append('<p>goodbye world</p>');
                    },
                    success: function(result) {




                        var imgdata = jQuery.parseJSON(result);



//                        $('#title').html(imgdata['title']);
//                        $('#desc').html(imgdata['desc']);


                        //                         $('#largimg').html("<div class='swiper-slide'> <div class='product-zoom-image'><img src='../../admin/uploads/" + value + "'> </div></div>");
                        //
                        //                            $('#thumb').html("<div class='swiper-slide'> <div class='paddings-container'><img src='../../admin/uploads/" + value + "'> </div></div>");
                        //                        
                        //                        
                        //                         $('#largimg').append("<div class='swiper-slide'> <div class='product-zoom-image'><img src='../../admin/uploads/" + value2 + "'> </div></div>");
                        //
                        //                            $('#thumb').append("<div class='swiper-slide'> <div class='paddings-container'><img src='../../admin/uploads/" + value2 + "'> </div></div>");


 
     
                        //  alert(imgdata.title);

                        test(imgdata.title);
                        
 

                    }
                });
                
                  


            }

        </script>


        <script>
            App.controller('Calendar', function($scope, $http) {
  $http.get('todos.json')
       .then(function(res){
          $scope.events = res.data[0].events;             
        });
});
//           $scope.getImagePath = function(imageName) {
//return "../../admin/uploads/" + imageName;
//};
        </script>


    <script type="text/javascript">
        
        var myapp = angular.module("myApp", []);
        myapp.controller("myCtrl", function($scope) {
            $scope.users = [{
                "pid": "17",
                "title": "dsfdsf",
                "desc": "dsvsdv",
                "img": 
                {
                    "img1": "mickey-1.jpg",
                    "img2": "mickey-2.jpg",
                    "img3": "mickey-3.jpg"
                }
            }];
        });

    </script>

        <div id="product-popup" class="overlay-popup">
            <div class="overflow">
                <div class="table-view">
                    <div class="cell-view">
                        <div class="close-layer"></div>
                        <div class="popup-container">

                            <div class="row">
                                <div class="col-sm-6 information-entry">
                                    <div class="product-preview-box">
                                        <div class="swiper-container product-preview-swiper" data-autoplay="0" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
                                            <div id="largimg" class="swiper-wrapper" ng-repeat="item in users">

                                                <div class="swiper-slide" ng-repeat="e in item.img">
                                                    <div class="product-zoom-image">
                                                        <img src="../../admin/uploads/{{e}}" alt="" data-zoom="img/product-main-1-zoom.jpg" />
                                                    </div>
                                                </div>

                                                
                                            </div>
                                            <div class="pagination"></div>

                                        </div>
                                        <div class="swiper-hidden-edges">
                                            <div class="swiper-container product-thumbnails-swiper" data-autoplay="0" data-loop="0" data-speed="500" data-center="0" data-slides-per-view="responsive" data-xs-slides="3" data-int-slides="3" data-sm-slides="3" data-md-slides="4" data-lg-slides="4" data-add-slides="4">
                                                <div id="thumb" class="swiper-wrapper" ng-repeat="item in users">
                                                    <div class="swiper-slide selected">

                                                    </div>
                                                    

                                                    <div class="swiper-slide" ng-repeat="e in item.img">
                                                        <div class="paddings-container"  >
                                                          
                                                            <img src="../../admin/uploads/{{e}}"/>
                                                            
                                                        </div>
                                                    </div>

                                                    <div class="pagination"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-sm-6 information-entry">
                                        <div class="product-detail-box" ng-repeat="item in users">
                                            <h1 id="title" class="product-title" ng-repeat="e in item">

                                                {{ e }}
                                            </h1>

                                            <div id="desc" class="product-description detail-info-entry" *ngFor='#data of users'>
                                                {{ data.desc }}
                                            </div>


                                            <div class="detail-info-entry">
                                                <a class="button style-10" style="text-decoration:none">Inquiry</a>

                                                <div class="clear"></div>
                                            </div>

                                        </div>
                                    </div>

                                <div class="close-popup"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
