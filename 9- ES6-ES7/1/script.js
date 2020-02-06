// İç içe fonksiyonlar yazarsan normal fonksiyon tanımı en üstteki objeyi görmez bunun için içeriye arrow functions kullanman gerekir
/*

let info = {
    names: ["Hakan", "hakan", "HAKAN", "123"],
    surname: "Ünal",
    number: 312,
    fonk: function () {
        this.names.map((name) => {
            console.log(this.surname + " " + name);
        });
    }
}
info.fonk();
*/


// *** Spread Operator


/*
const fonksiyon = (a, b, c) => {
    return a + b + c;
}

console.log(fonksiyon(2, 3, 4));
let arr;
arr = [10, 20, 30];
console.log(fonksiyon(...arr));
*/


// *** Rest parameter


/*
const fonk = (...arr) => {
    let total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}

array = [1, 2, 3, 4, 5];

console.log(fonk(1, 2, 3, 4, 5, 6, 7));
console.log(fonk(...array));


const fonki = (a, b, c, ...d) => {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

fonki(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/


// *** from


/*
let products = [
    { name: "Samsung 1", price: 1000 },
    { name: "Samsung 2", price: 2000 },
    { name: "Samsung 3", price: 3000 }
];

console.log(Array.from(products, prd => prd.name));
console.log(Array.from(products, prd => prd.name=="samsung"));   // [false,false,false]
console.log(Array.from(products));
*/