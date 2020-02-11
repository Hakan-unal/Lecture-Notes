/*
let select = Math.round(Math.random());


const promise = new Promise((resolve, reject) => {
    console.log(select);
    if (select) {
        resolve("Succes");
    } else {
        reject("404 error");
    }
});

const succes = (data) => {
    console.log(data);
}

const error = (msg) => {
    console.log(msg);
}

promise.then(succes).catch(error);
*/



/*
const Success = (object) => {
    let val = JSON.parse(object.responseText);
    console.log(val.employees[1].name);
}

const Error = (msg, status) => {
    console.log(msg + " " + status);
}

new Promise((olumlu, olumsuz) => {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../2/start.json", true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            olumlu(xhr);
        } else {
            olumsuz("Hata", xhr.status);
        }
    }
    xhr.send();

}).then(Success).catch(Error);
*/



/*
const Calculate = (number) => {
    let val;
    val = number * number;
    console.log(`val: ${val} number: ${number}`);
    return val;
}

const notCalculate = (number) => {
    console.log(`Sorry this value is ${number}`);
}

let object = new Promise((basarili, basarisiz) => {
    let num;
    num = Math.round(Math.random() * 9) + 1;
    if (num <= 5) {
        basarili(num);
    } else {
        basarisiz(num);
    }
});

object.then(Calculate).then(Calculate).then(Calculate).catch(notCalculate);
*/