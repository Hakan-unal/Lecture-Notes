const express = require("express");
const router = express.Router();

const path = require("path");

/*
router.use("/", (req, res, next) => {
    res.send(`<h1>Hello world Express.js</h1>`);
});
*/


router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});


module.exports = router;