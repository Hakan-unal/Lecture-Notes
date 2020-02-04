// *** Primitive & Objects


/*
let num = 1;
let num1 = num;
num = 4;

console.log(num, num1);

let obj = {
    name: "Hakan",
    surname: "Ünal"
};

let obj1 = obj;
obj.surname = "lanü";
console.log(obj1.surname);


let num2 = 10;
let obj2 = {
    name: "hakan"
};

fonki = function (num, obj) {
    num = 20;
    obj.name = "tugay";
};

console.log(num2, obj2);
fonki(num2, obj2);
console.log(num2, obj2);
*/


// *** Callback Functions


/*
function fonk(a, b, c, d, e, f, callback) {
    let arr = [];
    for (let i = 0; i < arguments.length - 1; i++) {
        arr[i] = callback(arguments[i] * 2);
    }
    return arr;
}

function add(a) {
    return a + 1;
}

let sum = fonk(1, 2, 3, 4, 5, 6, add);
console.log(sum)


// *** Immediate Functions

function week() {
    let days = [1, 2, 3, 4, 5, 6, 7];
    let today = new Date();
    let msg = `Welcome. Today is: ${days[today.getDay()]}`;
    return msg;
};


let name = "Hakan";

(function (na) {
    let days = [1, 2, 3, 4, 5, 6, 7];
    let today = new Date();
    let msg = `Welcome ${na}. Today is: ${days[today.getDay()]}`;
    console.log(msg);
}(name));
*/


// *** Functions that Return Functions


/*
function Question(hobby){

    switch(hobby){
        case 'car':
            return function(name){
                console.log(name +' do you have a car ?');
            }
        break;

        case 'book':
            return function(name){
                console.log(name +' what is your favourite book ?');
            }
        break;

        case 'software':
            return function(name,type){
                console.log(name +' are you interested in '+type+' ?');
            }
        break;

        default:
            return function(name){
                console.log(name +' how are you ?');
            }
    }
}


var carQuestion = Question('car');

carQuestion('Çınar');
carQuestion('Emel');

var bookQuestion = Question('book');

bookQuestion('Yiğit');
bookQuestion('Ada');
bookQuestion('Sena');

var softwareQuestion = Question('software');

softwareQuestion('Sadık','nodejs');
softwareQuestion('Ali','angular');
*/