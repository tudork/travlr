# Travlr

## Installation

1. npm install

2. sails lift

3. npm run test  - for testing

## Usage
Request format: /flight/{from}/{to}/{departureDate} for OneWay flights
Example: /flight/OTP/FCO/2016-06-30

Request format: /flight/{from}/{to}/{departureDate}/{returnDate} for RoundTrip
Example: /flight/OTP/FCO/2016-06-30
## flight 

* from - string - required - origin location
* to - string - required - destination location
* departureDate - string - required - departure date (format YYYY/MM/DD) 
* returnDate - string - required - return date (format YYYY/MM/DD)
* adultCount - integer - optional - number of adultschildCount - integer - optional - number of * childs 
* infantInLapCount - integer - optional - number of infants in lap 
* infantInSeat - integer - optional - number of infants in seat 
* seniorCount - integer - optional - number of seniors 
* maxStops - integer - optional - number of stops (max 3) 
* maxConnectionTime - integer - optional - maximmum connection time 
* preferredCabin - string - optional - preffered cabin ( options: None, Coach, Premium Class,  * Business, First Class) 
* earliestTime - string - optional - earliest hour 
* latestTime - string - optional - latest hour 
* permittedCarrier - string array - optional - permitted carriers (delimited by ',') 
* prohibitedCarrier - string array - optional - prohibited carriers (delimited by ',') 
* maxPrice - integer - optional - max total price 
* saleCountry - string - optional - country price format 
* refundable - boolean - optional - refundable tickets 
* solutions - integer - optional - number of adults (max 500) 

## Request-Response QPX
https://www.youtube.com/watch?v=oYbdibPzuMA

