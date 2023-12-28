app.controller("dashboardCtrl",["$scope","userservice",function($scope,userservice){
  $scope.Uname;
  (function(){
    
    if(localStorage==null){
      console.log("Data is not present");
      alert("Login Failed");
      window.location.href="#!signin"

    }
    else{
      let lid = window.localStorage.key(0)
      userservice.getData(function(data){
          for(let ele of data){
            if(ele.id==lid){
              $scope.Uname=ele.name
              break;
            }
          }
      })

    }
  }())
  

  //functionality for logout
  let lid = window.localStorage.key(0)
  $scope.clearData=function(){
    window.localStorage.removeItem(lid)
    window.location.href="#!signin"

  }
      
    


}])