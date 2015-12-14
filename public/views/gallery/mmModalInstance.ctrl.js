'use strict';

app.controller('ModalArtworkCtrl',['$scope','$modalInstance','items',function ($scope, $modalInstance, items) {

	$scope.imgpath = items[0];
	$scope.details = items[1];

	$scope.doPurchase = function (size) {
		$modalInstance.close(size);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

}]);