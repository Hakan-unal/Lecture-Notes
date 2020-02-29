// Browser


/*
const ControlB = (() => {
    let name, surname;
    name = "HakanB";
    surname = "ÜnalB";
    number = 21;
    const fonk = function () {
        this.number++;
        return this.number;
    }
    return {
        name,
        surname,
        fonk,
        number
    }
})();

console.log(ControlA.name + " " + ControlA.surname);
console.log(ControlB.name + " " + ControlB.surname);
console.log(ControlB.fonk());
*/


// Node.js


/*
console.log(module);

// public
let firstName = "Hakan";
// private
let age = 32;

const fonk = (name) => {
    console.log(name)
}

console.log("SCRİPTB");


/* Aşağıdaklerin Hepsi Aynı */
module.exports.isim = firstName;   // module.exports={isim:firstName,deneme:fonk}   
module.exports.deneme = fonk;      // module.exports={firstName,fonk}

import { fonksiyon1, fonksiyon2 } from './scriptA';

console.log(fonksiyon1("merhaba"));
console.log(fonksiyon2("Merhaba"));