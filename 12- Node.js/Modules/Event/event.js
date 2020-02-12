/*
const EventClass = require("events");
const fileSystem = require("fs");
const eventObject = new EventClass();



eventObject.on("connection", () => {
    fileSystem.appendFile("event.txt", "  File edited", (error) => {
        if (error) {
            console.log(error);
        } else {
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

fileSystem.writeFile("event.txt", "Hello world", (error) => {
    if (error) {
        console.log("Hata");
    } else {
        console.log("File Created")
        eventObject.emit("connection");
    }
});
*/
