app.factory('dataFac', ['$http', function($http){
	var obj = {};

	obj.getLeaderBoard = function(){
		return $http.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
	}
	return obj;

}]);