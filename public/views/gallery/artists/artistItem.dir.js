'use strict';

app.directive('artistItem', function () {
  var controller = function () {
    var vm = this;
    this.seeArtwork = function(){
      // Not using this but it works... vm is controller 
    }
  }
  return {
    restrict: 'E',
    scope:{
      artist:'@',
      bio:'@',
      imgsrc:'@'
    },
    link: function (scope, element, attrs) {
      scope.hover = false;
      element.on('mouseenter', function () {
        scope.hover = true;
        //console.log("mouseEnter " + scope.hover);
        scope.$digest();
      });
      element.on('mouseleave', function () {
        scope.hover = false;
        //console.log("mouseLeave " + scope.hover);
        scope.$digest();
      });
      scope.getHover = function(){
        var rtn;
        if(scope.hover == false){
          rtn="titleArea";
        }else{
          rtn="titleAreaHover";
        };
        return rtn;
      };
    },
    controller: controller,
    controllerAs: 'vm',
    bindToController: true,
    templateUrl:'views/gallery/artists/artistItemTemplate.html'
  }
});