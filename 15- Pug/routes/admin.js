// Gerekli modüller tanımlandı
const express = require("express");
const path = require("path");

// express değişkeni üzerinden method çapırıldı ve router değişkeni içerisine
// class tanımlandı
const router = express.Router();

// Eğer girilen url aşağıdaki gibiyse ve method get ise callback fonksiyon çağırılır
router.get("/add-product", (req, res, next) => {
    // express.js üzerinden sendFİLE methodu çağırılarak client tarafondan istenen
    // dosya tam path'i ile birlikte parametre olarak gönderilerek çağırılır
    /* res.sendFile(path.join(__dirname, "../", "views", "add-product.html")); */

    // pug engine kullandığımız için aşağıdaki gibi bir methoda sahibiz. Engine
    // kendisine tanımlanan dizin içerisinde add-product isimli dosyayı arar ve
    // bulunca render edip aynı html dosyası gibi kullanıcının karşısına çıkartır
    res.render("add-product",{title:"Add-Product"});
});

// Eğer girilen url aşağıdaki gibiyse ve method post ise callback fonksiyon çağırılır
router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    // Kullanıcı bu sayfada iken post methodunu kullanırsa yönlendirme yapılarak /user
    // adresine gönderilir bu method express framewörkü ile bize geliyor
    res.redirect("/user");
});

// Modül dışarıdan import edilebilsin diye gerekli tanımlama yapıldı
module.exports = router;