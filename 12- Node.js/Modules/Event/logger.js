const Event = require("events");
// Event değişkenine events modülü tanımlandı. Aşağıda bulunan Logger class'ı oluşturulurken Event class'ı 
// içerisindeki özellikler yeni class'a extend edildi
class Logger extends Event {
    // log fonksiyonu içerisine gelen message parametresi üzeridnen aşağıdaki işlemler gerçekleşiyor
    log(message) {
        console.log(message);
        let object = { name: "Hakan", surname: "Ünal" };
        // Bu class üzerinden oluşturulan obje this parametresi ile emit methodunu içine alır (emit: event 
        // tetiklemeye yarıyor aşağıda event'i tetikleyecek olay "connection") bu methodun içine object
        // değişkeninide gönderir tetiklenmenin beklendiği yer değişkenAdı.on("connection") methodu ayrıca
        // parametre beklendiği için değişkenAdı.on("connection",(args)=>{}) böyle bir fonksiyon tarafından
        // event bekleniyor
        this.emit("connection", object);
    }
}

// require edilmesi halinde üzerine tanımlandığı değişken üzerinden değişkenAdı.Logger ile buradaki
// Logger class'ına ait tüm özelliklerden obje yaratılabilir
module.exports.Logger = Logger;