var http = require('http');
var prompt = require('readline-sync');
var _ = require('underscore');
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

        /*_.each(parsed.body, function (value) {
            console.log(value);
        });*/

        console.log(parsed.body['Alexa category']);
        console.log('How is child safety ' + parsed.body['WOT domain info']['Child safety']);
        for (var item in parsed.body.categories) {
          console.log('categories'parsed.body.categories[item]);
        }
        console.log('Why Youtube? ' + parsed.body['Alexa domain info']);
    });
});
