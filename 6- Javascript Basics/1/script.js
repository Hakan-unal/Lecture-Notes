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

/* Switch-Case */

/*
switch (new Date().getDay()) {
    case 0: console.log("Pazar"); break;
    case 1: console.log("Pazartesi"); break;
    case 2: console.log("Salı"); break;
    case 3: console.log("Çarşamba"); break;
    case 4: console.log("Perşembe"); break;
    case 5: console.log("Cuma"); break;
    case 6: console.log("Cumartesi"); break;
    default: console.log("Böyle birgün yok");
}

switch (new Date().getDay()) {
    case 6:
    case 0: console.log("Haftasonu"); break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: console.log("Haftaiçi"); break;
    default: console.log("Böyle birgün yok");
}

switch (true) {
    case ("hakan" == "hakan"): console.log("hakan"); break;
    case ("ünal" == "hakan"): console.log("hakan1"); break;
    case ("1900" == "hakan"): console.log("hakan2"); break;
    case ("2012" == "hakan"): console.log("hakan3"); break;
    case ("20122" == "hakan"): console.log("hakan4"); break;
    case ("2019" == "hakan"): console.log("hakan5"); break;
    default: console.log("merhaba");
}
*/

/* Object-Literals */   // => arrow functionlar this'i görmez nesneyi tanımaz

/*
let hakan;
hakan = {
    age: 20,
    fonki() {
        return "fonki " + this.age;  // fonki 20
    },
    fonk: function () {
        return "fonk " + this.age;   // fonk 20
    },
    fon: () => {
        return "fon " + this.age;    // fon undefined
    }
}

console.log(hakan.fonki());
console.log(hakan.fonk());
console.log(hakan.fon());
console.log(hakan.age);
*/


/* Loops */

/*
for (let i = 0; i < 10; i++) {
    if (i == 0) {
        console.log(i);
        continue;
    }
    else if (i == 4) {
        console.log(i);
        break;
    }
    else {
        console.log("merhaba");
    }
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log("merhaba");
    i++;
}

let j = 0;
do {
    console.log("merhaba");
    j++;
}
while (j < 10)
*/

/* Loops in Array&Objects */


/*
let array = ["hakan", "ünal", 1990, "merhaba"];

for (let i in array) {
    console.log(i);               // 0 1 2 3
}

array.forEach((element) => {
    console.log(element);         // hakan ünal 1990 merhaba
});

array.forEach(function (item) {
    console.log(item);            // hakan ünal 1990 merhaba
});


let object;
object = [
    { firstName: "Hakan", lastName: "Ünal", age: 23 },
    { firstName: "Haka", lastName: "Üna", age: 24 },
    { firstName: "Hak", lastName: "Ün", age: 22 }
];

let val = object.map(function (item) {
    // objenin her uzantısını ayrı ayrı çağırıp onun üzerinden işlem yapıyor
    return item.firstName + " " + item.lastName + " " + item.age;
});
console.log(val);
*/

/* Function-Declarations*/


function hakan(item) {
    console.log(item);
}

haka = function (item) {
    console.log(item)
}

let hak, ha;

hak = (item) => {
    console.log(item);
}

ha = function (item) {
    console.log(item)
}

h = function (a = 1, b = 2, c = 3, d = 4) {   // 4 3 2 4 
    console.log(a, b, c, d);
}

hakan(1);
haka(2);
hak(3);
ha(4);
h(4, 3, 2);