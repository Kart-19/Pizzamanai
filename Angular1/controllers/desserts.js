app.controller("dessertCtrl",["$scope","dessetservice",function($scope,dessetservice){
     
    $scope.arr = [];
    dessetservice.getData(function(data){
        $scope.arr = data;
        console.log($scope.arr);
    })
   

}])