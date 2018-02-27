<html ng-app="myapp1">

<head>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script type="text/javascript">
        
        
        var myapp = angular.module("myapp1", []);
        myapp.controller("AppController", function($scope) {
            $scope.users = [{
                "pid": "17",
                "title": "dsfdsf",
                "desc": "dsvsdv",
                "img": {
                    "img1": "mickey-1.jpg",
                    "img2": "mickey-2.jpg",
                    "img3": "mickey-3.jpg"
                }
            }];
        });

    </script>
</head>

<body ng-controller="AppController">
    <div ng-repeat="item in users">
    
          
<div>
                <ul ng-repeat="e in item">
                    <li>{{e}}</li>
                </ul>
        
</div>


    </div>
</body>

</html>
