'use strict';

app.controller('DataCtrl',['$scope','$state','sqlDb','SharedSrvc',function ($scope,$state,sqlDb,SharedSrvc) {
	var Me = this;
	var S = SharedSrvc;
	var DB = sqlDb;

	var artist = {};
	var artwork = {};
	var evt = {};

	Me.codeInput = "";
	Me.result = "";
	Me.artworkDetails = [];
	
	Me.artistList = S.artists;

	Me.submitArtist = function(){
		DB.putArtist(artist);
	};

	Me.submitArtwork = function(){
		DB.putArtwork(artwork);
	};

	Me.submitEvent = function(){
		DB.putEvent(evt);
	};

	Me.submitNum = function(n){
		codeInput = codeInput + n;
		if(codeInput.length == 4){

		}
	}

	Me.doLookup = function(){
		var error = false;
		if(Me.codeInput.length != 4){
			error = true;
		}
		var asNum = parseInt(Me.codeInput);

		if(asNum < 1000){
			error = true;
		}

		if(asNum > 9999){
			error = true;
		}
		
		var isValid = Me.checkIsNumber(asNum);
		
		if(error===true || isValid===false){
			Me.codeInput = "";
			alert('Invalid entry');
		}else{
			Me.codeInput = "";
			Me.result = "Fetching data..."
			Me.artworkDetails = S.returnArtByID(asNum);
			if(Me.artworkDetails.length == 0){
				Me.result = "No data for that number..."
			}else{
				Me.result = "";
			}
		}
	};

	Me.checkIsNumber = function(obj) { 
		return !isNaN(parseFloat(obj)) 
	}

	 $scope.$watch('$viewContentLoaded', function() {
 		DB.getArtworks();
		DB.getArtists()
    });

	

 }]);