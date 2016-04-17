// TODO SERVICE
function jeuService($http) {
    return {
        get : function() {
            return $http.get('/jeus');
        },
        update : function(id, data){
            return $http.put('/jeus/' + id, data);
        },
        create : function(data) {
            return $http.post('/jeus', data);
        },
        delete : function(id) {
            return $http.delete('/jeus/' + id);
        }
    }
};
