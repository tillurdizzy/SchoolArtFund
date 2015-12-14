'use strict';


app.controller('NavCtrl',['$scope','$state',function ($scope,$state) {

	$scope.radioModel = 'Home';

    $scope.goNav = function(){
        switch($scope.radioModel){
            case 'home':$state.transitionTo('home');break;
            case 'about':$state.transitionTo('about');break;
            case 'gallery':$state.transitionTo('gallery.artists');break;
            case 'events':$state.transitionTo('upcoming-events');break;
            case 'contact':$state.transitionTo('contact');break;
        }
    }

 }]);