// Tarayıcı


/*
let name = "Hakan";
console.log(name);
console.log(surname);
console.log(window);

window.console.log("merhaba");
window.alert("merhaba");

const time = window.setInterval(() => {
    console.log("1 saniye");
}, (1000));

const timeout = setTimeout(() => {
    clearInterval(time);
    console.log("başarılı")
}, (9000));
*/


// Node.js

//global

let name = "Hakan";
let surName = "Ünal";



setTimeout(() => {
    console.log("2500ms");
}, (2500));

console.log(global.name);
console.log(name);
console.log(surname);
console.log(surName);