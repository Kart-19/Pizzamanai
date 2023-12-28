app.controller("forgetCtrl",["$scope","userservice",function($scope,userservice){
     
    $scope.forget = function(){
        $scope.userobject = {
            email : $scope.forgetemail,
            password:$scope.forgetpassword
        }
        console.log($scope.userobject);
        userservice.forgetData($scope.userobject);
    }
   

}])