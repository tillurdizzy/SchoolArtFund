'use strict';

app.controller('GalleryCtrl',['$scope','$state','sqlDb','SharedSrvc',function ($scope,$state,sqlDb,SharedSrvc) {
	var Me = this;
	var DB = sqlDb;
	var S = SharedSrvc;
	var myName = "GalleryCtrl: ";

	// Controls ng-show in DOM 
	var myViews = ['default','byArtist'];
	Me.currentView = myViews[0];

	Me.defaultViewSort = "artist";

	Me.artistList = [];
	Me.selectedArtist = Me.artistList[0];

	Me.changeSort = function(){
		switch(Me.defaultViewSort){
			case "artist":$state.transitionTo("gallery.artists");break;
			case "artworks":$state.transitionTo("gallery.artworks");break;
		}
	};

	Me.selectArtist = function(){
		var artistID = Me.selectedArtist.artist;
		console.log(myName + "selectArtist " + artistID);
		S.selectedArtistID = artistID;
		S.selectedArtistName = artistID;
		$scope.$broadcast('select-artist');
	};

	// Called from ArtistCtrl in artist.html when "See artwork" is clicked
	Me.showArtistPage = function(artistName){
		console.log(myName + "showArtistPage " + artistName);
		S.selectedArtistID = artistName;
		Me.currentView = myViews[1];
		$state.transitionTo("gallery.artworks");
		// Set artist name in select component
		for (var i = 0; i < Me.artistList.length; i++) {
			if(Me.artistList[i].artist == artistName){
				Me.selectedArtist = Me.artistList[i];
			}
		};
	};

	$state.transitionTo("gallery.artists");
	
	DB.getArtworks();

	DB.getArtists()
	.then(function(result){
		Me.artistList = result;	
	},function(error){
		Me.dataError();
	});

	Me.dataError = function(){
 		
 	};
	
 }]);