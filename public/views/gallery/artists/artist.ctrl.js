'use strict';

app.controller('ArtistCtrl',['$scope','SharedSrvc','$state',function ($scope,SharedSrvc,$state) {
	var Me = this;
	var S = SharedSrvc;
	var myName = "ArtistCtrl: ";
	Me.currentFilter = "All";


	// Called from the 'See artwork' tag on the artists' grid item
	// Uses ng-click in artist.html
	Me.showArtistPage = function(artistName){
		console.log(myName + "showArtistPage " + artistName);
		// This will automatically trigger DOM change because ng-show = Ctrl1.currentView
		// Ctrl1 is GalleryCtrl
		$scope.Ctrl1.currentView = "byArtist";
		S.selectedArtistName = artistName;
	};

	// Ex: All, Professionals, Amateurs, Students
	Me.applyFilter = function(){
		if(Me.currentFilter == "All"){
			Me.myData = S.artists;
		}else{
			Me.myData = S.filterArtistBy(Me.currentFilter);
		}
	};

	
	// Listener - Broadcast from SharedSrvc
	$scope.$on('artist-data-ready', function() {
		Me.myData = S.artists;
	});


	$scope.$watch('$viewContentLoaded', function() {
		Me.myData = S.artists;
		$scope.Ctrl1.currentView = "default";
		$scope.Ctrl1.defaultViewSort = "artist";
	});
	
 }]);