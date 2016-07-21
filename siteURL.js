var http = require('http');
var prompt = require('readline-sync');
var site = prompt.question("Site URL: ");


    return http.get({
        host: 'mizzen-api.herokuapp.com',
        path: '/sites?site=' + site
    }, function(response) {

        var body = '';

        response.on('data', function(d) {
            body += d;
        });

        response.on('end', function() {
        var parsed = JSON.parse(body);
        console.log(parsed);
    });
});
