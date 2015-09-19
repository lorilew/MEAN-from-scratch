'use strict';

app.service('productservice', function ($resource, $http) {
	
	var instance = function(){};
        
        // Gets all products available to user with locationID
        instance.getProducts = function(locationID, cb){
        	var Product = $resource('/api/products?locationID='+locationID);
        	Product.query(function(results){
        		cb(results);
        	});
        };

        // Sends customerID and product list when user confirms.
	instance.confirmation = function(customerID, productList, cb){
		$http.post("/api/catalogue/confirmationPage?customerID="+customerID, {"products":productList})
    		.success(function(response) {
    			// redirect to confirmation page
    		});
	}
	
        return instance;
});
