'use strict';

app.service('userservice', function ($http) {
	
	var instance = function(){};
        
        // Sends GET request to server to retrieve locationID
        instance.getLocationID = function(customerID, cb){
        	$http.get("/api/users?customerID="+customerID)
                  .success(function(response) {
                        cb(response.locationID);
               })
               .error(function(response){
    	        console.log("CustomerID Invalid");
               });
       };
        return instance;
});
