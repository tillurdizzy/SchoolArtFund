'use strict';

app.directive('galleryItem', ['SharedSrvc', function (SharedSrvc) {
  var linkFunction = function(scope, element, attributes) {
    
  };

  var ctrlFunction = function($scope){
    $scope.showDetails = function(){
      $scope.showdetails();
    }
  };

  return {
    restrict: 'AE',
    scope:{
      id:'@',
      artist:'@',
      title:'@',
      thumbsrc:'@',
      showdetails:'&'
    },
    controller:ctrlFunction,
    templateUrl:'views/gallery/galleryItemTemplate.html',
    link:linkFunction 	
  };
     
}]);