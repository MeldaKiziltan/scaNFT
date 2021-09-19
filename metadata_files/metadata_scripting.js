var metadata = {
    "attributes" : [ {
        "trait_type" : "HacktheNorth",
        "value" : "MyBoat"
      }, 
      {
        "trait_type" : "Boat color",
        "value" : "Yellow"
      } ],
      "description" : "My boat avatar for Hack the North 2021!",
      "image" : "https://gateway.pinata.cloud/ipfs/QmUFcTTmDQ9gtYPm5MviBsuuj5vgDaA43haJQpRM2FfGbq",
      "name" : "MyBoat"
}

var dictstring = JSON.stringify(metadata);
var fs = require('fs');
fs.writeFile("thing.json", dictstring, function(err, result) {
    if(err) console.log('error', err);
});