const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/products', (req, res) => res.send('Products listed'));
console.log("changed");

app.listen(port, () => console.log(`Example app listening on port port! 3000`));