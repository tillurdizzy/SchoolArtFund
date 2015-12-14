'use strict';

app.service('sqlDb',['$http','$q','SharedSrvc',function eventQueries($http,$q,SharedSrvc){
	var self = this;
	self.lastResult = [];
	self.ME = "sqlDb: ";
	var S = SharedSrvc;

	self.sendEmail = function(dataObj){
		$http({method: 'POST', url: 'js/php/sendEmail.php',data:dataObj});
	};

	self.insertRequest = function(dataObj){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/putRequest.php',data:dataObj}).
		success(function(data, status, headers, config) {
     		deferred.resolve(data);
	    }).
	    error(function(data, status, headers, config) {
			deferred.reject(data);
	    });
	    return deferred.promise; //return the data
	};
	
	
	self.putArtist = function(dataObj){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/putArtist.php',data:dataObj}).
		success(function(data, status, headers, config) {
     		deferred.resolve(data);
	    }).
	    error(function(data, status, headers, config) {
			deferred.reject(data);
	    });
	    return deferred.promise;
	};

	self.putArtwork = function(dataObj){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/putArtwork.php',data:dataObj}).
		success(function(data, status, headers, config) {
     		deferred.resolve(data);
	    }).
	    error(function(data, status, headers, config) {
			deferred.reject(data);
	    });
	    return deferred.promise;
	};

	self.putEvent = function(dataObj){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/putEvent.php',data:dataObj}).
		success(function(data, status, headers, config) {
     		deferred.resolve(data);
	    }).
	    error(function(data, status, headers, config) {
			deferred.reject(data);
	    });
	    return deferred.promise;
	};

	
	self.getArtworks = function(){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/getArtworks.php'}).
		success(function(data, status) {
			if(typeof data != 'string' && data.length > 0){
				S.setArtworks(data);
     			deferred.resolve(data);
			}else{
				deferred.resolve(false);
			}
	    }).
		error(function(data, status, headers, config) {
			console.log(data);
			deferred.reject(data);
	    });
	    return deferred.promise;
	}

	self.getArtists = function(){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/getArtists.php'}).
		success(function(data, status) {
			if(typeof data != 'string' && data.length > 0){
				self.lastResult = data;
				S.setArtists(data);
     			deferred.resolve(data);
     		}else{
				deferred.resolve(false);
     		}
	    }).
		error(function(data, status, headers, config) {
			deferred.reject(false);
	    });
	    return deferred.promise; //return the data
	};

	self.getEvents = function(){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/getEvents.php'}).
		success(function(data, status) {
			if(typeof data != 'string' && data.length > 0){
				self.lastResult = data;
				S.setEvents(data);
     			deferred.resolve(data);
     		}else{
				deferred.resolve(false);
     		}
	    }).
		error(function(data, status, headers, config) {
			deferred.reject(false);
	    });
	    return deferred.promise; //return the data
	};


	self.updateArtist = function(dataObj){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/updateArtist.php',data:dataObj}).
		success(function(data, status, headers, config) {
     		deferred.resolve(data);
	    }).
	    error(function(data, status, headers, config) {
			deferred.reject(data);
	    });
	    return deferred.promise;
	};

	
	return self;
}]);