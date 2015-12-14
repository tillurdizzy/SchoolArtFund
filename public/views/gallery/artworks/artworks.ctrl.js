'use strict';

app.controller('ArtworksCtrl',['$scope','SharedSrvc','$state','$modal',function ($scope,SharedSrvc,$state,$modal) {
	var Me = this;
	var S = SharedSrvc;
	var myName = "ArtworksCtrl: ";
	Me.myFeaturedArtist = [];

	Me.headerTxt = "ARTWORKS";

	Me.items = [];

	Me.ctrlShowDetails = function(id){
		console.log(myName + "showDetails " + id);
		Me.items = [];
		for (var i = 0; i < Me.myData.length; i++) {
			if(Me.myData[i].PRIMARY_ID == id){
				var imgpath = Me.myData[i].fullsrc;
				Me.items.push(imgpath);
				Me.items.push(Me.myData[i]);
			}
		};
		Me.open();
	};

	$scope.$on('select-artist', function() {
		Me.filterByArtist();
	});

	Me.filterByArtist = function(){
		// SharedSrvc already has artistID
		// Just refresh Me.myData
		Me.myData = S.returnArtworks();
 		Me.headerTxt = S.selectedArtistName;
 		//console.log(myName + "filterByArtist " + Me.headerTxt);
	};


	

	Me.open = function () {
   		var modalInstance = $modal.open({
      		templateUrl: 'views/gallery/myModalContent.html',
      		controller: 'ModalArtworkCtrl',
      		resolve: {
        		items: function () {
          			return Me.items;
        		}
      		}
    	});

	    modalInstance.result.then(function (purchaseSize) {
	      console.log('Close and purchase '+ purchaseSize);
	    }, function () {
	      console.log('Modal dismissed');
	    });
	};

	$scope.$on('artwork-data-ready', function() {
		Me.myData = S.returnArtworks();
		Me.headerTxt = S.selectedArtistName;
    });

    $scope.$watch('$viewContentLoaded', function() {
 		Me.myData = S.returnArtworks();// Returns ALL or just a single selected artist IF selected atist is not null
 		Me.headerTxt = S.selectedArtistName;
    });
	
 }]);