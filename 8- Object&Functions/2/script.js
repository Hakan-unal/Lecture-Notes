// *** Prototypeal Inheritance  (Constructor'dan constructor'a kalıtım )


/*
const Person = function (name, surname, no) {
    this.name = name;
    this.surname = surname;
    this.no = no;
}

Person.prototype.fonk = function () {
    return this.no + 5;
}

let object;
object = new Person("hakan", "ünal", 12);
console.log(object);

const Person1 = function (name, surname, no, subject) {
    Person.call(this, name, surname, no);
    this.subject = subject;
}

let object1 = new Person("tugay", "ünal", 12);
console.log(object1);

let object2 = new Person1("tugay1", "ünal1", 121, "öğretmen");
console.log(object2);

// console.log(object2.fonk());  inherit edilmediği için bu methodu çağıramazsın şuan

Person1.prototype = Object.create(Person.prototype);

let object3 = new Person1("tugay1", "ünal1", 121, "öğretmen");
console.log(object3.fonk());

Person1.prototype.constructor = Person1;

let object4 = new Person1("asd", "dsa", 12, "asdasd");
console.log(object4);
*/


// *** Built in Constructor 


let str1 = "Hakan";
let str2 = new String("Hakan");

if (str1 === "Hakan") {
    console.log("yes");
} else {
    console.log("no");
}

if (str2 === "Hakan") {
    console.log("yes");
} else {
    console.log("no");
}

let num1 = 123;
let num2 = new Number(123);

let arr1 = [1, 2, 3, 4];
let arr2 = new Array(1, 2, 3, 4);


let obj1 = {
    name: "hakan"
};

let obj2 = new Object({
    name: "hakan"
});

let bol1 = true;
let bol2 = new Boolean(true);