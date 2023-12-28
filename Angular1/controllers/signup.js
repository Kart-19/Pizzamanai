app.controller("signupCtrl",["$scope","userservice","$location",function($scope,userservice,$location){
   
    $scope.signup = function(){

        if(nullCheck() && passwordCheck() && passwordLen()){
            // gennum();
        $scope.userobject = {
            name:$scope.name,
            email:$scope.email,
            password:$scope.password
        }
        var mail = $scope.email;
        var pass = $scope.password;
        var name = $scope.name;
        console.log(mail);
        localStorage.setItem("mail",mail);
        localStorage.setItem("password",pass);
        localStorage.setItem("name",name);
        $location.path('/otp')
        // $scope.verify = function(){
        //     if($scope.rand == $scope.otpuser){
        //     let getresponse = userservice.postData($scope.userobject);
        //     if(getresponse) $location.path('/otp')
        // }

        // else console.log("Invalid Otp");

        }
    }
    //     $scope.verify = function(){
    //         console.log($scope.user);
    //         if($scope.rand == $scope.otpuser){
    //         let getresponse = userservice.postData($scope.userobject);
    //         if(getresponse) $location.path('/signin')
    //     }
    //     else{
    //         console.log("Invalid Otp");
    //     }
    //   }
    


    //Function for the passwor  & repassword Check
    function passwordCheck(){
        console.log("Password Check");
        if($scope.password === $scope.repassword){
            return true;
        }
        else{

            $scope.msg = "Password Mismatch";
            return false;
        }
    }

    function nullCheck(){
        console.log("inside nullcheck");
        if(($scope.name =='' || $scope.name == null) && ($scope.email == '' || $scope.email == null) && ($scope.password =='' || $scope.password == null ) && ($scope.repassword =='' || $scope.repassword == null)){
           console.log("If");
           $scope.msg = "Value Should Not Empty";
            return false
        }
        else{
            return true
        }
    }

    function passwordLen(){
        if($scope.password.length >= 6){
            return true;
        }
        else{
            $scope.msg = "Password Must Greater than 6 Character"
            return false;
        }
    }



    //Function used of the toogle to  show passsword
    $scope.show = false;
    $scope.toogle = function(){
        $scope.show = !$scope.show;
    }


    //Otp Number Generator
    // function gennum(){
    //     $scope.rand = Math.floor(Math.random() * 100000);
    //     console.log($scope.rand);
    // }
    
}])