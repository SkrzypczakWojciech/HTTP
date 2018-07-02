var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        response.write('Odczyt Index.js:');
        fs.readFile('./index.js', 'utf-8', function(err, data) {
            response.write(data);
            response.end();
        });
        
    } else {
        response.statusCode = 404;
        Response.Write( < img src = "error.jpg"
            alt = "error" >
        );
        response.end();
    }
});

server.listen(8080);