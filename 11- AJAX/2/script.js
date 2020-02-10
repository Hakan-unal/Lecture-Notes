// JSON */


/*
let name = "Hello World";

((val) => {
    console.log(val);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "start.json", true);
    xhr.onload = () => {

        if (xhr.status === 200) {
            setTimeout(() => {
                let val;
                val = JSON.parse(xhr.responseText);
                console.log(val.employees[0].name);
                console.log(val.employees1);
                console.log(val.employees);
                console.log(val.employees2[0].surname);
                document.querySelector("#img").style.display = "none";
            }, 1500);
        }
    }

    xhr.onprogress = () => {
        document.querySelector("#img").style.display = "inline";
        console.log("merhaba");
    }

    xhr.send();


})(name);
*/


// Rest API */
// GET


/*
let xhr = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/users";

xhr.open("GET", url, true);

xhr.onload = () => {
    if (xhr.status === 200) {
        let val = JSON.parse(xhr.responseText);
        val.forEach(person => {
            console.log(`Welcome ${person.name}. Your user name ${person.username}. Your real address is ${person.address.street}`);
        });
    }
}
xhr.send();
*/


// POST


/*
let info = {
    userId: 101,
    id: 101,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

let json = JSON.stringify(info);
let url = "https://jsonplaceholder.typicode.com/posts/";

let xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");


xhr.onload = () => {
    if (xhr.status === 201 && xhr.readyState === 4) {
        let post = JSON.parse(xhr.responseText);
        console.log(post);
    }
}

xhr.send(json);
*/