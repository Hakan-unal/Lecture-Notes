//** Encapsulation */



/*
let Modul = (() => {

    let number = 0;
    console.log(number);

    let fonk = () => {
        return ++number;
    }

    return {
        fonk,
        number
    }

})();

console.log(Modul.fonk());
console.log(Modul.number);


let Module = (() => {
    let fonki = () => {
        console.log("merhaba");
    }

    return {
        fonki
    }
})();

Module.fonki();
*/


// Uygulama



productController = (() => {
    let array = [];

    const addProduct = (product) => {
        array.push(product);
    }

    const removeProduct = (product) => {
        let index = array.indexOf(product);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }

    const getProducts = () => {
        return array;
    }

    return {
        addProduct,
        removeProduct,
        getProducts
    }

})();

let object = { name: "Hakan", surname: "Ünal" }
let object1 = { name: "Hakan1", surname: "Ünal1" }
let object2 = { name: "Hakan2", surname: "Ünal2" }

productController.addProduct(object);
productController.addProduct(object1);
productController.addProduct(object2);

console.log(productController.getProducts());



// Module Extending

let extended = ((item) => {

    item.sayhello = () => {
        console.log("merhaba");
    }

    return item;

})(productController || {});

extended.sayhello();