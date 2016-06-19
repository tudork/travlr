var Sails = require('sails');
var sails;

before(function(done)
{
  Sails.load({hooks:{grunt:false}}, function(err, server)
  {
    sails = server;
    if (err) return done(err);
    done(err, sails);
  });
});

after(function(done)
{
  Sails.lower(done);
});