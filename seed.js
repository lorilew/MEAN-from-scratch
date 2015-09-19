

var Product = require('../models/product');

Product.find({}).remove(function() {
  Clip.create({
  	category: "Sports",
	channel: "Arsenal TV",
        locationID: "LONDON"
  },{
  	category: "Sports",
	channel: "Chelsea TV",
        locationID: "LONDON"
  },{
  	category: "Sports",
	channel: "Liverpool TV",
        locationID: "LIVERPOOL"
  },{
  	category: "News",
	channel: "Sky News"
  },{
  	category: "News",
	channel: "Sky Sports News"
  }
)});

db.users.insert([{ customerID: "1", locationID: "LONDON" },{ customerID: "2", locationID: "LIVERPOOL" },{ customerID: "3", locationID: "LEEDS" }]);
