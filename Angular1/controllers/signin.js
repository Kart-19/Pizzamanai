app.controller("signinCtrl",["$scope","userservice","$location",function($scope,userservice,$location){
   

    //Used for the signin, getting the data and validation 
   
    $scope.signin =function(){
        userservice.getData(function(data){
            console.log(data);
           
            for (const i of data) {
                
                if((i.email === $scope.email)  && (i.password === $scope.password)){
                    $scope.name = i.name
                    console.log("Inside If");
                    // localStorage.setItem("name",i.name);

                    localStorage.setItem(i.id,i.email);
    
    
                    $location.path("/dashboard");
                }

                else $scope.msg = "Invalid Email or Password";
            }
        });  
    }


    //used for the toogle effect on the showpassword    
    
    $scope.show = false;
    $scope.toogle = function(){
        $scope.show  = !  $scope.show ;
    
    }

    //Used for the checking the localstorage of the email & pass
   //Not yet Complete
    
    
}]);