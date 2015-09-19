app.controller('productsController', ['$scope', 'userservice', 'productservice','$resource', '$http', function($scope, userservice, productservice, $resource, $http){
  // For example only, this would be stored as a cookie.
  // 1,2,3 valid, else invalid ID
  var user = {
  	customerID: "1",
	locationID: null
  }
 
  $scope.sProducts = [];
  $scope.nProducts = [];
  $scope.myProducts = [];

  // Get user location and populate product selection
  userservice.getLocationID(user.customerID, function(locationID){
  	productservice.getProducts(locationID, function(results){
  	  for(var i=0; i<results.length; i++){
  		if(results[i].category==="Sports"){
  			$scope.sProducts.push(results[i]);
  		}
                if(results[i].category==="News"){
  			$scope.nProducts.push(results[i]);
  		}
           }
  	});
  });
  
  // Adds/Removes selected products from list.
  $scope.select = function(product){
  	var index = $scope.myProducts.indexOf(product);
  	//if already selected, remove
  	if(index===-1){
  		$scope.myProducts.push(product);
  	}else{
  		$scope.myProducts.splice(index,1);
  	}
  };
 
 // When user checkouts the customerID and product list are sent to the server CatalogueService
 $scope.checkout = function(){
   productservice.confirmation(user.customerID, $scope.myProducts, function(){});
 };

}]);


