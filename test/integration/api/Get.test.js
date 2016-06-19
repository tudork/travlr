/*
Remember to change the date in the request
*/
var request = require('supertest');

describe('OneWayTrip from Otopeni to Fiumicino departing on 2016-06-25 ',
 function() {
  it('respond with json', function(done) {
    request(sails.hooks.http.app)
      .get('/flight/OTP/FCO/2016-06-25' )
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/* Request are expensive so we test only the OneWayTrip 


describe('RoundTrip', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/flight/OTP/FCO/2016-06-25/2016-06-26')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
*/