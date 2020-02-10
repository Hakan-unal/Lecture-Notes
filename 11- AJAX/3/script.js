// Callback fonksiyonlar ile asenkron programlama */


/*
let products = [
    { id: 1, name: "Samsung", version: "s6" },
    { id: 2, name: "Samsung", version: "s7" },
    { id: 3, name: "Samsung", version: "s8" }
];

const addProduct = (prd, callback) => {

    setTimeout(() => {
        products.push(prd);
        callback(products);
    }, (2000));
}


const getProduct = (array) => {
    setTimeout(() => {
        array.forEach((prd) => {
            console.log(prd.name + " " + prd.version);
        });
    }, (1000));
}

let object = { id: 4, name: "Samsung", version: "s9" };

addProduct(object, getProduct);
*/


// Promise */


/*
let products = [
    { id: 1, name: "Samsung", price: "1000" },
    { id: 2, name: "Samsung", price: "2000" },
    { id: 3, name: "Samsung", price: "3000" }
]


const addProduct = (prd, callback) => {
    return new Promise((basarili, basarisiz) => {

        setTimeout(() => {
            products.push(prd);
            let added = false;

            if (added) {
                basarili(products);
            } else {
                basarisiz("hata : 500");
            }

        }, (1500));
    });
}

const getProducts = (arr) => {
    setTimeout(() => {
        arr.forEach((prd) => {
            console.log(prd.id + " " + prd.name);
        })
    }, (1000));
}

const catchError = (err) => {
    console.log(err);
}

let object = { id: 4, name: "Samsung", price: "4000" };
addProduct(object).then(getProducts).catch(catchError);
*/