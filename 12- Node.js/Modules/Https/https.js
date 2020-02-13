const https = require("https");

https.createServer((req, res) => {
    console.log("New Connection");
    res.writeHead(200);
    res.end('hello world\n');
    console.log("Server Listen 3000");

}).listen(3000);


https.createServer((req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
  console.log("Server Listen 8000");
}).listen(8000);

