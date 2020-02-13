const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes */

// app.use(adminRoutes);
// app.use(userRoutes);

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);


app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, "views", "404.html"));
});


/*
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});
*/


/*
app.use("/", (req, res, next) => {
    console.log("Loglama yapıldı");
    next();
});
*/


/*
app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});
*/


/*
app.use("/", (req, res, next) => {
    console.log("Middleware 3");
    res.send(`<h1>Hello world Express.js</h1>`);

});
*/



app.listen(port, () => console.log(`Example app listening on port port! 3000`));