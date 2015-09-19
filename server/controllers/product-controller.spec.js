var should = require('should');
var app = require('../../server.js');
var request = require('supertest');

describe('GET /api/users', function() {
    it('should respond with 400 (bad request), missing locationID', function(done) {
        request(app)
            .get('/api/products')
            .expect(400, done);
    });
});

describe('GET /api/products', function() {
    it('should respond with only News channels', function(done) {
        request(app)
            .get('/api/products?locationID=LEEDS')
            .expect('Content-Type', /json/)
            .end(function(err, res){
        	if (err) return done(err);
		for(var i=0; i<res.body.length; i++){
			res.body[i].category.should.equal('News')
		}
          	done();
        })
    });
});

describe('GET /api/products', function() {
    it('should respond with News and Liverpool TV', function(done) {
        request(app)
            .get('/api/products?locationID=LIVERPOOL')
            .expect('Content-Type', /json/)
            .end(function(err, res){
        	if (err) return done(err);
		for(var i=0; i<res.body.length; i++){
			res.body[i].channel.should.not.equal('Chelsea TV');
			res.body[i].channel.should.not.equal('Arsenal TV');
		}
          	done();
        })
    });
});
describe('GET /api/products', function() {
    it('should respond with News, Arsenal and Chelsea', function(done) {
        request(app)
            .get('/api/products?locationID=LONDON')
            .expect('Content-Type', /json/)
            .end(function(err, res){
        	if (err) return done(err);
		for(var i=0; i<res.body.length; i++){
			res.body[i].channel.should.not.equal('Liverpool TV');
		}
          	done();
        })
    });
});
