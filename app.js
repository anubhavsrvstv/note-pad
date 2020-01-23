var http = require('http');

console.log('Working')
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT || 8080);