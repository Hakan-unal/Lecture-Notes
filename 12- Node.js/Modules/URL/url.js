const url = require("url");

const address = "https://www.linkedin.com/in/hakan0/";

let result = url.parse(address, true);

console.log(result);
console.log("********");
console.log(result.protocol);
console.log(result.path);
console.log(result.href);
console.log(result.pathname);
console.log(result.slashes);
console.log(result.auth);
console.log(result.port);
console.log(result.search);