'use strict';

app.service('SharedSrvc',['$rootScope',function sharedVars($rootScope){
	var self = this;
	
	self.myID = "SharedVars: ";

	self.selectedArtistID = 0;
	self.selectedArtistName = "ARTWORKS";// 'ARTWORKS' is the default when no particular artist selected

	//Database vars
	self.artists = [];
	self.events = [];
	self.artworks = [];

	self.events_upcoming = [];
	self.events_past = [];

	// Called from data.srvc when result from DB complete
	self.setArtists = function(arr){
		self.artists = arr;
		//console.log("ARTISTS");
		for (var i = 0; i < self.artists.length; i++) {
			//console.log(self.artists[i].name_last);
			self.artists[i].artist = self.artists[i].name_first + " " + self.artists[i].name_last;
			var photoImg = self.artists[i].photo;
			if(photoImg == ""){
				self.artists[i].photo = "views/gallery/images/person-placeholder.jpg";
			}else{
				self.artists[i].photo = "views/gallery/images/" + photoImg;
			}
		};
		$rootScope.$broadcast("artist-data-ready");
	};

	// Filter by type; i.e. Professional, Amateur, Student
	self.filterArtistBy = function(filter){
		var rtnArr = [];
		if(filter != "All"){
			for (var i = 0; i < self.artists.length; i++) {
				if(self.artists[i].artistType == filter){
					rtnArr.push(self.artists[i]);
				}
			}
		}else{
			rtnArr = self.artists;
		}
		return rtnArr;
	};


	// Called from data.srvc when result from DB complete
	self.setArtworks = function(arr){
		self.artworks = arr;
		//console.log("ARTWORK");
		// Add complete file paths to file names
		for (var i = 0; i < self.artworks.length; i++) {
			var filenamethumb = "views/gallery/images/" + self.artworks[i].thumbsrc;
			var filename = "views/gallery/images/" + self.artworks[i].fullsrc;
			self.artworks[i].thumbsrc = filenamethumb;
			self.artworks[i].fullsrc = filename;
			self.artworks[i].artistName = self.artworks[i].artist;
			//console.log(self.artworks[i].title + " : "  + self.artworks[i].fullsrc);
		};
		$rootScope.$broadcast("artwork-data-ready");
	};

	self.setEvents = function(arr){
		self.events = arr;
		for (var i = 0; i < self.events.length; i++) {
			if(self.events[i].status == 0){
				self.events_past.push(self.events[i]);
			}else{
				self.events_upcoming.push(self.events[i]);
			}
		};
		$rootScope.$broadcast("event-data-ready");
	};

	self.returnPhotographs = function(){

	}

	self.returnArtByID = function(_id){
		var rtnArr = [];
		var resultObj = null;
		
		for (var i = 0; i < self.artworks.length; i++) {
			var ID = self.artworks[i].artist;
			if(ID == _id){
				var resultObj = self.artworks[i];
				break;
			}
		};
		if(resultObj != null){
			var tableObj = new Object();
			tableObj.item = "Name";
			tableObj.detail = resultObj.artist;
			rtnArr.push(tableObj);

			tableObj = new Object();
			tableObj.item = "Title";
			tableObj.detail = resultObj.title;
			rtnArr.push(tableObj);

			tableObj = new Object();
			tableObj.item = "5x7";
			tableObj.detail = resultObj.price_5x7;
			rtnArr.push(tableObj);

			tableObj = new Object();
			tableObj.item = "8x10";
			tableObj.detail = resultObj.price_8x10;
			rtnArr.push(tableObj);

			tableObj = new Object();
			tableObj.item = "11x14";
			tableObj.detail = resultObj.price_11x14;
			rtnArr.push(tableObj);

			tableObj = new Object();
			tableObj.item = "16x20";
			tableObj.detail = resultObj.price_16x20;
			rtnArr.push(tableObj);

			tableObj = new Object();
			tableObj.item = "thumb";
			tableObj.detail = resultObj.thumbsrc;
			rtnArr.push(tableObj);
		}
		return rtnArr;
	};

	
	self.returnArtworks = function(){
		var rtnArr = [];
		// filter by self.selectedArtistID;
		if(self.selectedArtistID != 0){
			for (var i = 0; i < self.artworks.length; i++) {
				if(self.artworks[i].artist == self.selectedArtistID){
					rtnArr.push(self.artworks[i]);
					self.selectedArtistName = self.artworks[i].artistName;
				}
			};
		}else{
			self.selectedArtistName = "ARTWORKS"
			rtnArr = self.artworks.slice(0);
		}
		return rtnArr;
	};

	
}]);