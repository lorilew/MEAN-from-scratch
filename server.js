var express               = require('express'),
	app               = express(),
	bodyParser        = require('body-parser'),
        mongoose          = require('mongoose'),
 	productsController = require('./server/controllers/products-controller'),
        catalogueService = require('./server/controllers/catalogue-service'),
        customerLocationService = require('./server/controllers/customerLocation-service')

mongoose.connect('mongodb://localhost:27017/sky-test')
app.use(bodyParser());



app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});


app.use('/js', express.static(__dirname + '/client/js'));


app.get('/api/products', productsController.lists);
app.get('/api/users', customerLocationService.getLocationID);
app.post('/api/catalogue/confirmationPage', catalogueService.confirmationPage)

app.listen(3000, function(){
	console.log('I\'m listening...');
});

module.exports = app;
