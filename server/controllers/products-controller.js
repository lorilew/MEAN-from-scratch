var Product = require('../models/product');


// Queries the db for all products with locationID given or locationID is null.
module.exports.lists = function (req,res){
	if(req.query.locationID===undefined || req.query.locationID===null){return res.send(400)}
	var locationID = req.query.locationID;

 	Product.find({$or:[ {'locationID':locationID}, {'locationID':null}]}, function(err, results){
 		res.json(results);
 	});
}
