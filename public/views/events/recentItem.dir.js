'use strict';

app.directive('recentItem', function () {
    return {
    	restrict: 'E',
      scope:{
      	dates:'@',
      	venue:'@',
        imgsrc:'@',
        title:'@'
      },
      templateUrl:'views/events/recentItemTemplate.html'
    	
      }
});