// ASYNC */

/*
const first = () => {
    console.log("first");
    second();
}

const second = () => {
    setTimeout(() => {
        console.log("timeout");
    }, 2000);
    console.log("second");
    third();
}

const third = () => {
    console.log("third");
}

first();
*/


// AJAX  */



let xhr = new XMLHttpRequest();
let xhr1 = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}
xhr.open("GET", "merhaba.txt", true);
xhr.send();


xhr1.onreadystatechange = () => {
    if (xhr1.readyState === 4) {
        if (xhr1.status === 200) {
            console.log("merhaba xhr1");
        } else if (xhr1.status === 404) {
            console.log("Kaynak bulunamadı");
        }
    }
}
xhr1.open("GET", "mer.txt", false);
xhr1.send();


xhr.onprogress = () => {
    console.log("Processing");
}

console.log("Asenkron");
/*
readyState özellikleri:

0: request not initialized
1: server conneciton established
2: request received
3: processing request
4: request finished and response is ready

status:

200: "OK"
403: "Forbidden"
404: "Not found"
*/