/**
 * FlightController
 *
 * @description :: Server-side logic for managing flights
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	returnFlight: function(req, res){
	var request = require('request');

var options = {
  uri: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAG_ezjATDF0it8-E8oPe6ycBKjiGhXOjU',
  method: 'POST',
  json: {
    "request": {
    "slice": [
      {
        "origin": req.params.from,
        "destination": req.params.to,
        "date": req.params.departing
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 0,
      "seniorCount": 0
    },
     "solutions": 20,
    "refundable": false
  }
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    return res.json({
		response: body
		
	});
	
	// Print the shortened url.
  }
});
	}
};

