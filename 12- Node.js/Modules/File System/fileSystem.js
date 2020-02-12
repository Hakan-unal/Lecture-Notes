const fs = require("fs");

let value;


/*
value = fs.readdir("../", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        data.forEach((item) => {
            console.log(item);
        });
    }
});
*/


/*
value = fs.readFile("fileSystem.js", "utf8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(typeof data);
    }
});
*/


/*
let metin = "Hello World";
fs.writeFile("denemeNode1.txt", metin, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("File created");
        fs.readFile("denemeNode1.txt", "utf8", (error, data) => {
            if (error) {
                console.log("File is not readed");
            } else {
                console.log(data);
            }
        })
    }
});
*/


/*
fs.appendFile("denemeNode1.txt", "Merhaba Dünya", (error) => {
    if (error) {
        console.log("Not added");
    } else {
        fs.readFile("denemeNode1.txt", "utf8", (error, data) => {
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        })
    }
});
*/


/*
fs.unlink("denemeNode.txt",((error) => {
    if (error) {
        console.log("Not deleted");
    } else {
        fs.readdir("./", (error, files) => {
            if (error) {
                console.log(error);
            } else {
                files.forEach((file) => {
                    console.log(file);
                });
            }
        });
    }
}));
*/


/*
fs.rename("denemeNode1.txt", "../deneme", (error) => {
    if (error) {
        console.log("Not renamed");
    } else {
        console.log("Succes");
    }
})
*/


/*
fs.rename("../deneme", "denemeNode1.txt", (error) => {
    if (error) {
        console.log("hata");
    } else {
        fs.readdir("./", "utf8", (error, files) => {
            files.forEach((file, index) => {
                console.log(`${index}. : ${file}`);
            });
        });
    }
});
*/