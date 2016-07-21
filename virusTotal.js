/*
1. Make REST requests to http://mizzen-api.herokuapp.com/sites/virus_total
2. Allow user to input a website to check
3. Make call to website (?site=nytimes.com)
3. Output response details.
*/


var http = require('http');
var prompt = require('readline-sync');
var site = prompt.question("Site URL: ");

var type = prompt.question("Do you want to know the virus total? ")

if (type === "yes") {
  var type = "/virus_total?site="
}
else {
  var type = "?site="
}

    return http.get({
        host: 'mizzen-api.herokuapp.com',
        path: '/sites' + type + site
    }, function(response) {

        var body = '';

        response.on('data', function(d) {
            body += d;
        });

        response.on('end', function() {
        var parsed = JSON.parse(body);
        console.log(parsed);
        //console.log(JSON.parse(body.undetected_referrer_samples[0]))
    });
});
