// *** Local Storage

// set item
/*
let isim = "hakan ünal"
localStorage.setItem("name", "Hakan");
let surname = localStorage.setItem("soyad", "Ünal");
console.log(localStorage);
*/

//* get item
/*
let val;
val = localStorage.getItem("soyad");
console.log(val);
val = localStorage.getItem("name");
console.log(val);
*/

//* remove item
/*
localStorage.removeItem("name");
localstorage.removeItem("soyad")
*/

//* clear
/*
localStorage.clear();
*/

//* set array to storage
/*
let hobies, val;
hobies = ["merhaba", "hakan", "ünal"];
localStorage.setItem("array", hobies);
console.log(localStorage);

val = localStorage.getItem("array").split(",");
console.log(val);
      
              /\
               |
               |   // aşağıdaki ile yukarıudaki durum arasında fark yok videoda aşağıdaki gibi anlatıyor ama yukarıda senin yaptığın daha kısa ve daha basit
              \/
              
    
localStorage.setItem("array2", JSON.stringify(hobies));
console.log(localStorage);
val = JSON.parse(localStorage.getItem("array2"));
console.log(val);
*/

// *** Session Storage

/*
let city = "hatay";
let tc = "101010101010";
console.log(sessionStorage);
*/

// set item
/*
sessionStorage.setItem("city", city);
sessionStorage.setItem("tc", tc);
*/

// get item

/*
let value;
value = sessionStorage.getItem("city");
console.log(value);
value = sessionStorage.getItem("tc");
console.log(value);
*/