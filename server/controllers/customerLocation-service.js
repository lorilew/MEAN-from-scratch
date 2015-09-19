var User = require('../models/user');

// Gets locationID from db. If invalid customerID returns 404 not found.
module.exports.getLocationID = function (req,res){
	console.log("getting locationID")
	if(req.query.customerID===undefined || req.query.customerID===undefined===null)
	{
		console.log("Bad request")
		return res.send(400);
	}
	 User.findOne({'customerID':req.query.customerID}, function(err, results){
		if(results===undefined || results===null){return res.send(404)}
	 	else{return res.json(results);}
	 });



}
