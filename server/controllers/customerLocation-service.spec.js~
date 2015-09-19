var should = require('should');
var app = require('../../server.js');
var request = require('supertest');

describe('GET /api/users', function() {
    it('should respond with 400 (bad request), missing customerID', function(done) {
        request(app)
            .get('/api/users')
            .expect(400, done);
    });
});

describe('GET /api/users', function() {
    it('should respond with 404 (not found), invalid customerID', function(done) {
        request(app)
            .get('/api/users?customerID=-1')
            .expect(404, done);
    });
});

describe('GET /api/users', function() {
    it('should respond with location json', function(done) {
        request(app)
            .get('/api/users?customerID=1')
	    .expect('Content-Type', /json/)
            .end(function(err, res){
        	if (err) return done(err);
          	done();
        })
    });
});
describe('GET /api/users', function() {
    it('should respond with location json', function(done) {
        request(app)
            .get('/api/users?customerID=1')
	    .expect('Content-Type', /json/)
            .end(function(err, res){
        	if (err) return done(err);
		console.log(res.body);
		res.body.locationID.should.equal('LONDON')
          	done();
        })
    });
});
