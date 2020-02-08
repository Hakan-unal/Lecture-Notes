let form;
form = document.getElementById("new-course");


class Course {
    constructor(title, instructor, image) {
        this.title = title;
        this.instructor = instructor;
        this.image = image;
        this.id = Math.floor(Math.random() * 10000);
    }
}

class UI {

    clearBox() {
        document.getElementById("title").value = "";
        document.getElementById("instructor").value = "";
        document.getElementById("image").value = "";
    }

    addCourse(course) {
        let list = document.getElementById("course-list");
        let html = `

        <tr> 
        <td> <img style="width:170px;" src="img/${course.image}.png"></td>
        <td> ${course.title}</td>
        <td> ${course.instructor}</td>
        <td> <a href="#" data-id="${course.id}" class= "btn btn-danger btn-sm">Delete</a></td>
        </tr>
        `
        list.innerHTML += html;
    }
    // fonksiyona gönderilen item parametresi html elementi olarak işlem 
    // göreceğinden item elementinin parent'inin parent'i sayfa üzeridnen silinir
    deleteCourse(item) {
        item.parentElement.parentElement.remove();
    }
    // fonksiyone gönderilen iki parametre üzerinden işlem gerçekleşir message
    // gösterilmek istenen mesaj className ise boostrap içerisindeki renk için
    // gerekli olan class adı
    showAlert(message, className) {
        let alert = `
        <div class="alert alert-${className}">
        ${message}
        </div>
        `;

        let row = document.querySelector(".row");
        row.insertAdjacentHTML("beforeBegin", alert);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }
}

class Storage {

    static getCourses() {
        let courses;

        if (localStorage.getItem("courses") === null) {
            courses = [];
        } else {
            courses = JSON.parse(localStorage.getItem("courses"));
        }
        return courses;
    }

    static displayCourses() {
        let courses = Storage.getCourses();
        courses.forEach(course => {
            let ui = new UI();
            ui.addCourse(course);
        });

    }

    static addCourse(course) {
        let courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem("courses", JSON.stringify(courses));
    }

    static deleteCourse(element) {
        let id = element.getAttribute("data-id");

        let courses = Storage.getCourses();

        courses.forEach((course, index) => {
            if (course.id == id) {
                courses.splice(index, 1);
            }
        });
        localStorage.setItem("courses", JSON.stringify(courses));
    }
}

form.addEventListener("submit", (e) => {

    let title, instructor, image;

    title = document.getElementById("title").value;
    instructor = document.getElementById("instructor").value;
    image = document.getElementById("image").value;

    if (title !== "" || instructor !== "" || image !== "") {

        // Course class'ı üzerinden obje yaratılıp objeye gerekli parametreler gönderiliyor
        let course = new Course(title, instructor, image);

        // UI class'ı üzerinden obje yaratılıp objeye gerekli parametre gönderiliyor
        let ui = new UI();


        // Obje üzerinden çağırılan addCourse methodu ile girilen bilgiler tabloya satır halinde eklendi
        ui.addCourse(course);

        // save database
        Storage.addCourse(course);

        // ui objesi üzerinden çağırılan methoda gerekli parametereler gönderildi
        ui.showAlert("The course has been added", "success");

        // obje üzerinden clearBox methodu çağırıldı ve input kutucuklarının içeriği temizlendi
        ui.clearBox();



        e.preventDefault();
    } else {
        let ui = new UI();
        ui.showAlert("Please complete the form", "warning");
    }
});


let list = document.getElementById("course-list");

// list değişkeni üzerine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışır
list.addEventListener("click", (e) => {
    // click event'inin gerçekleştiği sayfa üzerindeki e değişkeninin
    // target'inin tagName'i A ise yani <a> etiketi ise aşağıdaki if koşulu
    // sağlanmış olur ve fonksiyon çağırılır
    if (e.target.tagName == "A") {
        let ui = new UI();
        ui.deleteCourse(e.target);
        Storage.deleteCourse(e.target);
        ui.showAlert("The course has been deleted", "danger");
    }


    e.preventDefault();
});

// document objesi üzerine event eklendi sayfa üzerindeki her şey yüklendiği zaman fonksiyon çağırılır
document.addEventListener("DOMContentLoaded", Storage.displayCourses);