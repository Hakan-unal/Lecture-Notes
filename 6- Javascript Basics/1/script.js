/*
for (var j = 0; j < 10; j++) {
    console.log(" ");
}
console.log(j);

for (let i = 0; i < 10; i++) {
    console.log(" ");
}
console.log(i);
*/


/*
let customer = {
    ad: "Hakan",
    soyad: "Ünal",
    tc: "101010101010",
    siparisToplami: 1500,
    cinsiyet: "erkek",
    adres: "adana çukurva",
    hobiler: "Futbol,Basketbol,Voleybol",
    order1: 100,
    order2: 150,
    fonksiyon: function () {
        let val;
        val = this.order1 + this.order2;
        return val;
    }
}

console.log(customer.ad);
console.log(customer.soyad);
console.log(customer.tc);
console.log(customer.siparisToplami);
console.log(customer.cinsiyet);
console.log(customer.adres);
console.log(customer.hobiler);
console.log(customer.fonksiyon());
*/

/*Date Object */

/*
let date;
date = new Date();

console.log("date objects: " + date);
console.log("getfullyear: " + date.getFullYear());
console.log("getMilliseconds: " + date.getMilliseconds());
console.log("getSeconds:" + date.getSeconds());
console.log("getUTCHours: " + date.getUTCHours());
console.log("getHours: " + date.getHours());
console.log("getMonth: " + date.getMonth());
console.log("getDate: " + date.getDate());

date.setFullYear(1996);
console.log("setFullyear: " + date.getFullYear());
*/

/* Numbers */

/*
let val, num;
num = 10.1021325455;

val = Number("10");                     // 10       // number
val = parseInt("10");                   // 10       // number
val = parseFloat("10.5");               // 10.5     // number
val = parseInt("a10a");                 // NaN      // number 
val = isNaN("a10");                     // true     // boolean
val = isNaN("10");                      // false    // boolean 
val = num.toPrecision(5);               // 10.102   // string
val = num.toFixed(2);                   // 10.10    // string
val = Math.PI;                          // 3.141592 // number
val = Math.ceil(2.4);                   // 3        // number
val = Math.ceil(2.6);                   // 3        // number
val = Math.round(2.4);                  // 2        // number
val = Math.round(2.6);                  // 3        // number
val = Math.floor(2.4);                  // 2        // number
val = Math.floor(2.6);                  // 2        // number
val = Math.sqrt(64);                    // 8        // number 
val = Math.sqrt(36);                    // 6        // number
val = Math.abs(-100);                   // 100      // number
val = Math.min(10, 5, 7, 8, 3, 4, 0);   // 0        // number
val = Math.max(10, 5, 7, 8, 3, 4, 0);   // 10       // number
val = Math.round(Math.random());        // (0-1)    // number

console.log(val);
console.log(typeof val);
*/

/* Strings */

/*
let val, firstName, lastName, string, string1;
string = "futbol,basketbol,voleybol";
string1 = "futbol basketbol voleybol";

firstName = "Hakan";
lastName = "Ünal";

val = firstName + " " + lastName;       // Hakan Ünal
val = firstName;                        // Hakan
val += lastName;                        // HakanÜnal
val = firstName.concat(" ", lastName);  // Hakan Ünal
val = firstName.concat(",", lastName);  // Hakan,Ünal
val = val.length;                       // 10
val = firstName.toUpperCase();          // HAKAN
val = lastName.toLowerCase();           // ünal
val = val[0];                           // ü
val = lastName[2];                      // a
val = firstName.indexOf("a");           // 1
val = lastName.indexOf("l");            // 3
val = lastName.indexOf("k");            // -1
val = firstName.substring(2, 5);        // kan
val = lastName.substring(0, 2);         // Ün  
val = lastName.slice(3);                // l
val = lastName.slice(0, 3);             // Üna
val = firstName.replace("a", "A");      // HAkan
val = "    " + firstName + "     ";     //      Hakan     
val = val.trim();                       // Hakan
val = string.split(",");                // ["futbol","basketbol","voleybol"]
val = string1.split(" ");               // ["futbol","basketbol","voleybol"]

console.log(val);
*/

/*
let fullName, city, year, val;
fullName = "Hakan";
city = "Adana";
year = 1996;

val = `my name is ${fullName}. My city is ${city}. My birthyear is ${year}`;

console.log(val);
*/

