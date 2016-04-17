// MAIN CONTROLLER
function jeuController($scope, $http, jeuService, userService, $rootScope, $sce) {
  $scope.i = 0;
  $scope.showme = false;
  $scope.question = function(id){
    $scope.id = id;
    userService.getreponse1(id).then(function(res){
      $scope.question = res.data;
      $scope.question.question = $sce.trustAsHtml(res.data.question);

      $('#myModal').modal('toggle');
    });
  };
  $scope.checkreponse = function(id, reponse ){
    userService.checkReponse(id, reponse).then(function(res){
      $scope.filter = res.data;
      $scope.i += 1;

    });


  };
}
