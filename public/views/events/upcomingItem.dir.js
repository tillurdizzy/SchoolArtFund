'use strict';

app.directive('upcomingItem', function () {
    return {
    	restrict: 'E',
      scope:{
      	dates:'@',
      	venue:'@',
        imgsrc:'@',
        title:'@'
      },
      templateUrl:'views/events/upcomingItemTemplate.html'
    	
      }
});