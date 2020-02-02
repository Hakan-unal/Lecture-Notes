let val;

val = window.document;
val = document.all;
val = document.all.length;
val = document.head;
val = document.body;
val = document.anchors;
val = document.URL;
val = document.domain;
val = document.title;
val = document.forms[0];
val = document.forms;
val = document.scripts;
val = document.scripts[0];

// console.log(val);


// Selecting Elements

// *** Single Elements

val = document.getElementById("p1");
val = document.getElementById("p1").id;
val = document.getElementById("p2").className;
val = document.getElementById("p3");
val = val.id;
val = val.className;      // undefined
val = document.querySelector("#p3");
val = val.className;     // p       bu iki durum rasındaki fark önemli
val = document.getElementById("p3");
val.style.fontSize = "30px";   // hata vermez
val = document.getElementById("p4");
val.innerText = "merhaba";
val.innerHTML = "<h2>Inner html</h2>";

document.querySelector("#p4").style.color = "red";
document.querySelector("#p3").textContent = "red";
document.querySelector("#p4").classList.add("active");
document.querySelector("#p4").classList.remove("active");

// console.log(val);


// *** Multiple Elements

val = document.getElementsByClassName("p");
val = val[1];
val = document.getElementsByClassName("p");

for (let i = 0; i < val.length; i++) {
    let total;
    total = val[i];
    console.log(total);
}
console.log(val);


val = document.getElementsByTagName("p");
val[0].style.color = "red";

val = document.querySelectorAll(".p");

val.forEach((element) => {
    console.log("");
    console.log(element);
    console.log("");
});
console.log(val);