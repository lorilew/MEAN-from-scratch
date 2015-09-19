
// Confirmation page stub. Output info to console.
module.exports.confirmationPage = function (req,res){
	if(req.query.customerID===undefined || req.query.customerID===null){return res.sendStatus(400);}
	if(req.body===undefined || req.body===null){return res.sendStatus(400);}
	   var customerID = req.query.customerID;
	   var products = req.body;
	   console.log("CONFIRMATION");
	   console.log("CustomerID: " + customerID);
	   console.log("Products: " + JSON.stringify(req.body));
	res.json({customerID:customerID, products:products });
}
