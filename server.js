var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
  // Get the request verb and url for simple routing.
  //
  // Example:
  //   GET /
  //   GET /items
  //
  var req = `${request.method} ${request.url}`;

  switch (req) {
    case 'GET /':
      response.writeHead(200, { 'Content-Type': 'text/html' });
      var stream = fs.createReadStream('app/app.html');
      stream.pipe(response);
      break;
    case 'GET /app.js':
      response.writeHead(200, { 'Content-Type': 'application/javascript' });
      var stream = fs.createReadStream('app/app.js');
      stream.pipe(response);
      break;
    default:
      // oops looks like that route isn't found
      response.writeHead(404, 'Not Found');
      response.end();
  }
}).listen(3000);

console.log('http server listening on http://localhost:3000');
