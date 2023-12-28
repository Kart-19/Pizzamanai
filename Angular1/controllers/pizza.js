app.controller("pizzaCtrl",["$scope","pizzaservice",function($scope,pizzaservice){
     
    $scope.arr = [];
    pizzaservice.getData(function(data){
        $scope.arr = data;
        console.log($scope.arr);
    })

    // For Filter Function

   $scope.filterMethod = function(value){
        $scope.byName = value
        // $scope.prices = "price"
        console.log($scope.byName);
   }
   $scope.sortMethod = function(value){
    $scope.prices = value
    // $scope.prices = "price"
    console.log($scope.prices);
}
}])