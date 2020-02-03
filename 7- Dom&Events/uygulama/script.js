let button, input, list;

button = document.querySelector("#button");
input = document.querySelector("#input");
list = document.querySelector("#list");
array = [];

button.addEventListener("click", () => {
    if (input.value !== "") {
        array[array.length] = input.value;

        if (array.length > 0) {
            array.forEach(element => {
                let li;
                li = document.createElement("li");
                li.textContent = element;
                li.setAttribute("class", "sınıf");
                li.setAttribute("id", "kimlik");
                list.appendChild(li);
                localStorage.setItem("array", array);
            });
        }
    } else {
        alert("add new item");
    }
});

onload = () => {
    let items = [];
    items = localStorage.getItem("array").split(",");
    items.forEach(element => {
        let li;
        li = document.createElement("li");
        li.textContent = element;
        li.setAttribute("class", "sınıf");
        li.setAttribute("id", "kimlik");
        list.appendChild(li);
    });
};