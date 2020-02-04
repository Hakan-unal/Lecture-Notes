// *** Object-Constructor

/*
let kimlik = {
    ad: "Hakan",
    soyad: "Ünal",
    tc: "124151",
    no: 1234
}

function Person(name, surname, no, tc) {
    this.ad = name;
    this.soyad = surname;
    this.numara = no;
    this.tc = tc;
    this.function = (tc) => {
        return 100;
    };
}

Person1 = function (name, surname, no, tc) {
    this.ad = name;
    this.soyad = surname;
    this.numara = no;
    this.tc = tc;
    this.function = (tc) => {
        return 100;
    };
}

let object, object1, object2;

object = new Person("hakan", "ünal", "1231234", 321);
object1 = new Person("haka", "üna", "123123", 32);
object2 = new Person("hak", "ün", "12312", 3);

console.log(object);
console.log(object1);
console.log(object2);

object = new Person1("hakan", "ünal", "1231234", 3210);
object1 = new Person1("haka", "üna", "123123", 320);
object2 = new Person1("hak", "ün", "12312", 30);

console.log(object);
console.log(object1);
console.log(object2.function());
*/


// *** Inheritance - Prototype


/*

Person = function (name, surname, tc) {
    this.name = name;
    this.surname = surname;
    this.tc = tc;
};

Person.prototype.fonksiyon = function () {
    return 3 + 5;
}

Person1 = function (name, surname, tc) {
    this.name = name;
    this.surname = surname;
    this.tc = tc;
    this.fonksiyon = function () {
        return 3 + 5;
    }
};

let object, object1;

object = new Person("hakan", "ünal", 3214);
object1 = new Person1("hakan", "ünal", 3214);

console.log(object, object1);
*/