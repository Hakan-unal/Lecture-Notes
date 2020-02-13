// events modülü require edildiği değişkene class olarak tanımlanır ve methodların kullanilebilmesi
// için objeye tanımlanması gereklidir
const EventClass = require("events");
const fileSystem = require("fs");

// eventObject objesi EventClass'ı üzerinden yaratıldı
const eventObject = new EventClass();

// eventObject üzerinde "connection" tetiklemesi gerçekleşirse aşağıdaki fonksiyon çalışır eğer 
// tetikleme sırasında gelen parametre yoksa ffonksiyon parametre alamdan çalışır
eventObject.on("connection", () => {

    // fileSystem üzerinde yer alan appendFile methodu ile event.txt dosyası içerisinde bulunan
    // içerik değiştirilmeden içerisine File edited metni gönderilir ve sonrasında ise çağırılan
    // callback fonksiyona error parametresi gönderilir.
    fileSystem.appendFile("event.txt", "  File edited", (error) => {
        // Eğer fonksiyondan gelen bir error varsa if bloğu çalışır ce console error değişkeni
        // yansıtılır eğer hata yoksa else bloğu çalışır
        if (error) {
            console.log(error);

        } else {
            // fileSystem üzerinde bulunan readFile methodu ile ilk önce okunmak istenen dosyanın dizin
            // yolu yazılır sonra karakter çözümlemesi için uth8 bilgisi gönderilir ve sonrasında callback 
            // fonksiyona error ve data parametreleri gönderilir. data parametresi dosya içerisindeki metindir
            fileSystem.readFile("event.txt", "utf8", (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(data);
                }
            });
        }
    });
});


// Aynı dizinde bulunan event.txt dosyası üzerine Hello World yazıldı append methodu kullanmadığımız için 
// Dosyada eski içerik varsa silinip üzerine yazılır sonrasında fonksiyona error parametresi gönderilir
fileSystem.writeFile("event.txt", "Hello world", (error) => {
    // Dosya üzerine yazma işleminde hata varsa if koşulu sağlanır yoksa else bloğu çalışır
    if (error) {
        console.log("Hata");
    } else {
        console.log("File Created")
        // eventObject değişkeni üzerinde on methodu ile "conneciton" tetiklemesi bekleniyorsa bu event tetiklenir
        // (emit()-on() bu parametreler birbiriyle iletişim halinde)
        eventObject.emit("connection");
    }
});

