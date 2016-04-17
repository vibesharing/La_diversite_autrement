function userService($http){
	return {
		create: function(user){
			return $http.post('/api/users', user);
		},
		get: function(){
			return $http.get('c');
		},
		getreponse1: function(id){
			return $http.get('/test/'+ id);
		},
		checkReponse: function(id, reponse){
			return $http.post('/checkReponse',{id: id, reponse:reponse});
		}

	};
}
