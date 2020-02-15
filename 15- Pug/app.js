// Gerekli modüller app dosyasına import edildi
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

// app değişkeni içerisine express() fonksiyonu üzerinden class tanımlandı
const app = express();
const port = 3000;

// view engine olarak pug'ı tanıttık
app.set("view engine", "pug");
// views dosyalarının path'ini belirtik isim default olarak views geliyor engine'den
// soldaki dizin adı değil views dosyaları diye bir tabir var
app.set("views", "./views");

// Localdeki js dosyaları app dosyası içerisine import edildi
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

// app.use ile uygulamanın kullanacağı public dosyalar tanımlandı bunun için express
// üzerinden projede static olarak kullanılacak dosyalar için yer alan hazır method
// çağırıldı ancak roottan itibaren tam path gerekli olduğu için projeye path
// modülünüde import etmek zorunda kaldık app.js dosyasının dizin adı __dirname
// ile getirildi ve aynı dizinde bulunan public klasörü tanımlandı. Bunun nededi
// node.js static dosyaları client'a doğrudan sunmaz bu şekilde public bir klasör
// içinde gerek js gerek css gerek görsel içerikler olsun dışarıya tanımlanması gerekir
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

// Routes */

// app.use(adminRoutes);
// app.use(userRoutes);

// Kullanacı url girerken aşağıdaki iki adresten birini yazarsa yanlarındaki
// değişkenlerin içerisinde tanımlanan dosyalara yönlendirme gerçeklerşir
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

// Eğer yukarıdaki yönlendirmeler gerçekleşmediyse kullanıcı proje içerisinde olmayan
// veya hazırlanamaış bir sayfayı talep etmiştir bu durumda hata mesajının verilmesi
// gerekli. Akış sırası önemli eğer bunu en yukarıya yazsaydın o zaman yukarıdaki iki
// fonksiyon gerçekleşmezdi buna dikkkat et
app.use((req, res) => {
    res.status(404);
    // express frameworkü üzerinde yer alan method ile views dizini içerisinde yer alan
    // 404.html dosyasına ulaştık path modülü bu işlem için gerekli çünkü methodun
    // kullanılabilmesi için dosyanın root dizininden başlayarak tam path'i lazım
    /* res.sendFile(path.join(__dirname, "views", "404.html")); */

    const object = [{ title: "404" }];
    // pug engine kullandığımız için aşağıdaki gibi bir methoda sahibiz. Engine
    // kendisine tanımlanan dizin içerisinde 404 isimli pug dosyasını arar ve
    // bulunca render edip aynı html dosyası gibi kullanıcının karşısına çıkartır
    res.render("404", { title: object });
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
// Server 3000 portundan açıldı


app.listen(port, () => console.log(`Example app listening on port port! 3000`));