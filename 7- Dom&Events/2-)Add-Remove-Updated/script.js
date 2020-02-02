// Dom üzerinde gezinme


/*

let val;

let list = document.querySelector('.list-group');

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // text 
val = list.childNodes[1].nodeType; // element

val = list.children;
val = list.children[0];
val = list.children[2];

val = list.children[2].textContent='new item';
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.children[0].nextSibling;
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;
//console.log(val);

for(let i=0; i<list.childNodes.length;i++){
   
    if(list.childNodes[i].nodeType===1){
        
        console.log(list.childNodes[i]);
    }

}

*/


// *** Creating Elements

//create element

let hakan = document.createElement("li");
console.log(hakan);
hakan.setAttribute("class", "sınıf");
console.log(hakan);
hakan.setAttribute("id", "kimlik");
console.log(hakan);
let text = document.createTextNode("Merhaba");
let ol;

ol = document.querySelector("#order");

hakan.appendChild(text);
ol.appendChild(hakan);



const taskList = document.querySelector('#task-list');

// ** removing element
// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);

// ** removing attribute
// taskList.children[1].removeAttribute('class');
// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute('class');
// }

// ** Replacing Elements
// const cardHeader = document.querySelector('.card-header');

// create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);


// ** Classes

let val;

link = taskList.children[0].children[0];

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// val = link.classList[1];

link.classList.add('new');
link.classList.remove('new');

// Attributes
val = link.getAttribute('data-id');
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://sadikturan.com');
val = link.hasAttribute('data-val');