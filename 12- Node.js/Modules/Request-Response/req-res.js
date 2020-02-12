// Sending Response




/*
const http = require("http");

const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type", "text/plain");     res.write("Hello World");
    // res.setHeader("Content-Type", "application/json");  res.write(JSON.stringify({ name: "Samsung", price:3000 }));
    
    res.setHeader("Content-Type", "text/html"); 
    res.statusCode = 200;
    res.statusMessage = "Ok";

    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from Nodejs Server <h1/></body>");
    res.write("<html>");
    res.end();
});

server.listen(3000);
console.log("Listening port on 3000");
*/


/*
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const HTMLfile = fs.readFile("idex.html", "utf8", (error, data) => {
        if (error) {
            res.setHeader("Content-Type", "text/plain");
            res.statusCode = 404;
            res.statusMessage = "Not Found";
            res.end("Dosya bulunamadı");
        } else {
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.statusMessage = "Ok";
            res.write(data);
            res.end();
        }
    });
});

server.listen("3000");
console.log("Listen 3000 port");
*/





// Routing Request


/*
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {

        fs.readFile("index.html", "utf8", (error, data) => {
            if (error) {
                res.setHeader("Content-Type", "text/html");
                res.statusCode = 404;
                res.statusMessage = "Not Found";
                res.write(`<html>   
                <body>
                
                <h1>404 bulunamadi </h1>
                </body
                </html`);
            } else {
                res.setHeader("Content-Type", "text/html");
                res.statusCode = 200;
                res.statusMessage = "Ok";
                res.write(data);
                res.end();
            }
        });
    } else {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 404;
        res.statusMessage = "Not found";
        res.write("Bad request");
        res.end();
    }
});

server.listen("3000");
console.log("Server listening");
*/



/*
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {

        fs.readFile("index.html", "utf8", (error, data) => {
            if (error) {
                res.setHeader("Content-Type", "text/html");
                res.statusCode = 404;
                res.statusMessage = "Not Found";
                res.write(`<html>   
                <body>
                
                <h1>404 bulunamadi </h1>
                </body
                </html`);
                res.end();
            } else {
                res.setHeader("Content-Type", "text/html");
                res.statusCode = 200;
                res.statusMessage = "Ok";
                res.write(`
                <html>  
                  <head>
                     <title> Enter Message  </title>
                   </head> 
                   <body>
                     <form method="POST" action="/log">
                       <input type=text name="message">
                       <button type="submit">Save</button>
                     </form>
                   </body
                </html`);
                res.end();
            }

        });
    } else if (url === "/log" && method === "POST") {
        fs.writeFileSync("message.txt", "deneme");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
    }

    else {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 404;
        res.statusMessage = "Not found";
        res.write("Bad request");
        res.end();
    }
});

server.listen("3000");
console.log("Server listening");
*/