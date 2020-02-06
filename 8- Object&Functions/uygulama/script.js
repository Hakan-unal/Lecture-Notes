let contain, question, info, first, second, third, fourth;
let index = 0;
let score = 0;
contain = document.querySelector("#contain");
question = document.querySelector("#question");
info = document.querySelector("#info");
first = document.querySelector("#first");
second = document.querySelector("#second");
third = document.querySelector("#third");
fourth = document.querySelector("#fourth");

let question1, question2, question3, questions;

questions = [
    question1 = { question: "En sevdiğiniz takım hangisi", answers: ["Beşiktaş", "beşiktaş", "BEŞİKTAŞ", "BJK"], answer: "Beşiktaş" },
    question1 = { question: "En sevdiğiniz takım hangisi", answers: ["Beşiktaş", "beşiktaş", "BEŞİKTAŞ", "BJK"], answer: "Beşiktaş" },
    question2 = { question: "En sevdiğiniz takım hangisi?", answers: ["Beşiktaş", "beşiktaş", "BEŞİKTAŞ", "BJK"], answer: "beşiktaş" },
    question3 = { question: "En sevdiğiniz takım hangisi??", answers: ["Beşiktaş", "beşiktaş", "BEŞİKTAŞ", "BJK"], answer: "BEŞİKTAŞ" }
]


function Answer(val, index) {
    question.textContent = val[index].question;
    first.textContent = val[index].answers[0];
    second.textContent = val[index].answers[1];
    third.textContent = val[index].answers[2];
    fourth.textContent = val[index].answers[3];
    return val[index].answer;
}

contain.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
        let sum;
        sum = Answer(questions, index);
        if (event.target.textContent == sum && index > 0) {
            score++;
        }
        index++;
        info.textContent = `Question: ${index} Score: ${score}`;

    }
});
