const events = require("events");
let EventEmitter = events.EventEmitter;
let emitter = new EventEmitter();


/*
// Her tetiklenmede bu çalışır

emitter.on("entry", (val) => {
    console.log("hello world",typeof val);
});

emitter.emit("entry", "123");
*/


/*
// Aynı olay için sadece ilk tetikleme çalışır diğerleri dikkate alınmaz

emitter.once("firstEntry", (val) => {
    console.log(`Merhaba ${val}`);
});

emitter.emit("firstEntry", "Hakan");
emitter.emit("firstEntry", "Hakan1");
emitter.emit("firstEntry", "Hakan2");
*/


/*
// on methodu için listenerCount methodu ile aynı olayın kaç tane dinleyicisi var ulaşabiliyoruz

emitter.once("olay", (val) => {
    console.log("Olay " + val);
});
emitter.on("olay", (val) => {
    console.log("Olay " + val);
});
emitter.emit("olay", "name");
emitter.emit("olay", "name1");
emitter.emit("olay", "name2");

console.log(EventEmitter.listenerCount(emitter, "olay"));
*/



/*
// tüm dinleyicilere ulaşıp hepsine ortak iş yaptırabiliyorsun

let i = 0;

emitter.on("olay", (val) => {
    i++;
    console.log(val + " " + i);
});

emitter.on("olay", (val) => {
    i++;
    console.log(val + " " + i);
});

emitter.on("olay", (val) => {
    i++;
    console.log(val + " " + i);
});

let listeners = emitter.listeners("olay");
listeners.forEach((dinleyiciler) => {
    val = "Sayı";
    dinleyiciler(val);
});
*/


/*
emitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
emitter.emit('event', 'a', 'b');
*/


emitter.on('error', (err) => {
    console.error('whoops! there was an error');
});
emitter.emit('error', new Error('whoops!'));

