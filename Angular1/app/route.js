app.config(["$routeProvider",(rp)=>{

    rp.when('/',{
        templateUrl:"../view/landing.html"
    })
    .when("/signin",{
        templateUrl:"../view/signin.html",
        controller:"signinCtrl"
    })
    .when("/signup",{
        templateUrl:"../view/signup.html",
        controller:"signupCtrl"
    })
    .when("/otp",{
        templateUrl:"../view/otp.html",
        controller:"otpCtrl"
    })

    .when("/dashboard",{
        templateUrl:"../view/dashboard.html",
        controller:"dashboardCtrl"
    })
    .when("/forgetpassword",{
        templateUrl:"../view/forget.html",
        controller:"forgetCtrl"
    })

    .when("/pizza",{
        templateUrl:"../view/pizza.html",
        controller : "pizzaCtrl"
        
    })

    .when("/dessert",{
        templateUrl:"../view/desserts.html",
        controller : "dessertCtrl"
        
    })

    .when("/burger",{
        templateUrl:"../view/burger.html",
        controller : "burgerCtrl"
        
    })
}])