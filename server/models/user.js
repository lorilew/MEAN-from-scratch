//user model for mongoose
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	customerID: String,
	locationID: String
});
