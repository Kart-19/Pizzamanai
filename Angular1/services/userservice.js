app.service("userservice",["$http",function($http){

    var url = "http://localhost:3000/users";


    //Sending the Data to the Server(POST)
    this.postData = function(userobject){

        $http.post(url, userobject).then(()=>{
            return true;
        },
        (err)=>{
            console.log(err);
        }
        )
    }


    //Getting the Data from the Server(GET)
     this.getData = function (cb){
        let flag = false;
        // this.boolvalue = false;
        $http.get(url).then((response)=>{
           
            cb(response.data);
            
         

         },
        (err)=>{
            console.log("Error Part");
            console.log(err);
            // return this.boolvalue
        })
    }
    ////////////////////////////
    
    //Forget Password
    this.forgetData = function(userobject){
        var id = userobject.email;
        console.log(typeof id);
        console.log(id);
        $http.patch(`http://localhost:3000/users/email/${{id}}`, userobject).then(()=>{
            console.log("Updated Success");
            return true;
        },
        (err)=>{
            console.log(err);
        }
        )
    }
}])