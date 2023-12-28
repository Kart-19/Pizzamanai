app.controller("burgerCtrl",["$scope","burgerservice",function($scope,burgerservice){
     
    $scope.arr = [];
    burgerservice.getData(function(data){
        $scope.arr = data;
        console.log($scope.arr);
    })
   

    $scope.filterMethod = function(value){
        $scope.byName = value
        $scope.prices = "price"
        console.log($scope.byName);
   }

   $scope.sortMethod = function(value){
    $scope.prices = value
    // $scope.prices = "price"
    console.log($scope.prices);
   }
}])