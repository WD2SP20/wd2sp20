const http = require('http'),
      util = require('util'),
      server = http.createServer();

server.on('request', (req, res) => {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end(`<pre>req.url: ${req.url}
req.method: ${req.method}
req: ${req}`);
});

server.listen(8080);
console.log('Server has Started!');