/**
 * FlightController
 *
 * @description :: Server-side logic for managing flights
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	returnOneWayFlight: function(req, res){
	var request = require('request');
 
  var solutions = req.query.solutions;
    if(typeof solutions == 'undefined')
      solutions = 20;
  var adultCount = req.query.adultCount;
    if(typeof adultCount == 'undefined')
      adultCount = 1;
  console.log(req.url)
  
var options = {
  uri: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAG_ezjATDF0it8-E8oPe6ycBKjiGhXOjU',
  method: 'POST',


  json:{
  "request": {
    "passengers": {
      "adultCount": adultCount,
      "childCount": req.query.childCount,
      "infantInLapCount": req.query.infantInLapCount,
      "infantInSeatCount": req.query.infantInSeatCount,
      "seniorCount": req.query.seniorCount
    },
    "slice": [
      {
        "origin": req.params.from,
        "destination": req.params.to,
        "date": req.params.departing,
        "maxStops": req.query.maxStops,
        "maxConnectionDuration": req.query.maxConnectionDuration,
        "preferredCabin": req.query.prefferedCabin,
        "permittedDepartureTime": {
          "earliestTime": req.query.earliestTime,
          "latestTime": req.query.latestTime
        },
       
        "permittedCarrier": [
          req.query.permittedCarrier
        ],
       
        "prohibitedCarrier": [
          req.query.prohibitedCarrier
        ]
      }
    ],
    "maxPrice": req.query.maxPrice,
    "saleCountry": req.query.saleCountry,
    "refundable": req.query.refundable,
    "solutions": solutions
  }
}
};

request(options, function (error, response, body) {
  console.log(response.statusCode)
  if (!error && response.statusCode == 200) {
function ob(pret,companie,plecare,sosire,durata,traseu)
{
        this.pret=pret;
        this.companie=companie;
        this.plecare=plecare;
        this.sosire=sosire;
        this.durata=durata;
		this.traseu=traseu;
}
var rezultate= new Array();
   for(var trip in body.trips.tripOption)
   {
        var pre=body.trips.tripOption[trip].saleTotal;
        var durat=body.trips.tripOption[trip].slice[0].duration;
        var plecar=body.trips.tripOption[trip].slice[0].segment[0].leg[0].departureTime;
		if(plecar.length)
            plecar=plecar.slice(11,16);
        var compani='';
		var trase=new Array();
        for(var seg in body.trips.tripOption[trip].slice[0].segment)
        {
            compani=compani+'+'+body.trips.tripOption[trip].slice[0].segment[seg].flight.carrier;
			var c=body.trips.tripOption[trip].slice[0].segment[seg].leg[0].origin;
			c=c+'->'+body.trips.tripOption[trip].slice[0].segment[seg].leg[0].destination;
			trase.push(c);
        }
        var sosir=body.trips.tripOption[trip].slice[0].segment[seg].leg[0].arrivalTime;
		if(sosir.length)
            sosir=sosir.slice(11,16);
        var v = new ob(pre,compani,plecar,sosir,durat,trase);
        rezultate.push(v);
   }
return res.json({
  respone:rezultate
  
 });
	
	
  }
});
	},
  returnRoundTripFlight: function(req, res){
  var request = require('request');
 
  var solutions = req.query.solutions;
    if(typeof solutions == 'undefined')
      solutions = 20;
  var adultCount = req.query.adultCount;
    if(typeof adultCount == 'undefined')
      adultCount = 1;

var options = {
  uri: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAG_ezjATDF0it8-E8oPe6ycBKjiGhXOjU',
  method: 'POST',


  json:{
  "request": {
    "passengers": {
      "adultCount": adultCount,
      "childCount": req.query.childCount,
      "infantInLapCount": req.query.infantInLapCount,
      "infantInSeatCount": req.query.infantInSeatCount,
      "seniorCount": req.query.seniorCount
    },
    "slice": [
      {
        "origin": req.params.from,
        "destination": req.params.to,
        "date": req.params.departing,
        "maxStops": req.query.maxStops,
        "maxConnectionDuration": req.query.maxConnectionDuration,
        "preferredCabin": req.query.prefferedCabin,
        "permittedDepartureTime": {
          "earliestTime": req.query.earliestTime,
          "latestTime": req.query.latestTime
        },
       
        "permittedCarrier": [
          req.query.permittedCarrier
        ],
       
        "prohibitedCarrier": [
          req.query.prohibitedCarrier
        ]
      },
      {
        "origin": req.params.to,
        "destination": req.params.from,
        "date": req.params.returning,
        "maxStops": req.query.maxStops,
        "maxConnectionDuration": req.query.maxConnectionDuration,
        "preferredCabin": req.query.prefferedCabin,
        "permittedDepartureTime": {
          "earliestTime": req.query.earliestTimeReturn,
          "latestTime": req.query.latestTimeReturn
        },
       
       "permittedCarrier": [
          req.query.permittedCarrier
        ],
       
        "prohibitedCarrier": [
          req.query.prohibitedCarrier
        ]
      }
    ],
    "maxPrice": req.query.maxPrice,
    "saleCountry": req.query.saleCountry,
    "refundable": req.query.refundable,
    "solutions": solutions
  }
}
};

request(options, function (error, response, body) {
  console.log(response.statusCode)
  if (!error && response.statusCode == 200) {
    return res.json({
    response: body
    
  });
  
  
  }
});
  }
};

