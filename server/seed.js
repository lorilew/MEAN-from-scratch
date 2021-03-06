//show collections if sky-test does not exist create a new db.
use sky-test
// First remove all items from db
db.products.remove({});
db.users.remove({});
// Add seed data to db.
db.products.insert([{
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
  }]);

db.users.insert([{
	customerID: "1",
	locationID: "LONDON"
},{
	customerID: "2",
	locationID: "LIVERPOOL"
},{
	customerID: "3",
	locationID: "LEEDS"
}]);
