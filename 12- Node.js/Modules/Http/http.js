const http = require("http");

/*
const server = http.createServer();
server.on("connection", () => {
    console.log("New connection");
});

server.listen(3000);
console.log("Listen 3000");
*/


/*
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello world");
        res.end();
    }

    if (req.url === "/google/fonts") {
        res.write("google");
        res.end();
    }


});

server.on("connection", () => {
    console.log("New connection");
});

server.listen(3000);
console.log("Listen port");
*/