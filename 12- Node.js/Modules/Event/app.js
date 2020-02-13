// fileLogger değişkenine ayı dizinde bulunan logger.js dosyası require methodu ile import edildi
const fileLogger = require("./logger");

// object objesi fileLogger içinde bulunan Logger() class'ı üzerinden yaratıldı
let object = new fileLogger.Logger();

// obje üzerinde yer alan on() methodu bir event bekliyor. Tetikleme gerçekleştiğinde tetiklemenin
// yanında gönderilen parametre fonksiyon içerisine girecek
object.on("connection", function (args) {
    console.log(`bağlantı kuruldu.`,args);
});

object.log("message");