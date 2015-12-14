'use strict';

app.controller('EventsCtrl',['$scope','$state','SharedSrvc','sqlDb', function ($scope,$state,SharedSrvc,sqlDb) {
	var Me = this;
	var S = SharedSrvc;
	var DB = sqlDb;
	
	Me.upcoming = [{title:"Nutcracker Market",venue:"NRG Center",dates:"November 12-15, 2015",imgsrc:"views/events/Nut_Market.jpg"},
	{title:"Sugar Plum Market",venue:"Stafford Centre",dates:"November 12-15, 2015",imgsrc:"views/events/sugarplum.jpg"}];

	Me.recent = [];

	
    
 }]);