// Gerekli modüller import edildi
const express = require("express");
const path = require("path");

const router = express.Router();

/*
router.use("/", (req, res, next) => {
    res.send(`<h1>Hello world Express.js</h1>`);
});
*/

// Kullanıcı bu sayfaya yönlendirildikten sonra aşağıdaki url ile get methodunu
// kullanırsa callback fonksiyon çağırılır
router.get("/", (req, res, next) => {
    // express.js üzerinden sendFİLE methodu çağırılarak client tarafından istenen
    // dosya tam path'i ile birlikte parametre olarak fonksiyona gönderilir çağırılır
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

// Modül dışarıdan import edilebilsin diye gerekli tanımlama yapıldı
module.exports = router;