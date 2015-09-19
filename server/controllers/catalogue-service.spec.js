 
var should = require('should');
var app = require('../../server.js');
var request = require('supertest');

describe('POST /api/catalogue/confirmationPage',function(){
    it('should respond with 400 (bad request), missing customerID', function(){
    	request(app)
        .post('/api/catalogue/confirmationPage')
        .type('form')
        .send({products: ['1','2']})
        .expect(400)
        .end(function(err, res){
        	if(err != null) throw err;
  		done();
        })
    })
});

describe('POST /api/catalogue/confirmationPage?customerID=1',function(){
    it('should respond with 400 (bad request), missing body', function(){
    	request(app)
        .post('/api/catalogue/confirmationPage?customerID=1')
        .send()
        .expect(400)
        .end(function(err, res){
        	if(err != null) throw err;
  		done();
        })
    })
});

describe('POST /api/catalogue/confirmationPage?customerID=1',function(){
    it('should respond with json', function(){
    	request(app)
        .post('/api/catalogue/confirmationPage?customerID=1')
        .type('form')
        .send({products: ['1','2']})
        .expect('Content-Type', /json/)
        .end(function(err, res){
        	if (err) return done(err);
          	done();
        })
    })
});
