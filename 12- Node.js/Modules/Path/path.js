const path = require(`path`);

// Dosyanın o an bulunduğu konumu gösterir
let result = path.resolve("path.js");

// Dosyanın uzantısını gösteriyor
result = path.extname("path.js");

// Dosyanın detaylı bilgisiyle birlikte konumunu verir
result = path.parse(__filename);

// Mevcut konum ile bulunduğu konumu kıyasıyor
result = path.dirname("path.js");

// Bulunan konum içerisinde parantez ile yazılan konum var mı boolean return eder
result = path.isAbsolute("/path.js");

console.log(result);