// *** Getter-Setter


/*
const person = {
    firstName : 'Sadık',
    lastName : 'Turan'
}


Object.defineProperty(person,'fullName',{
    get function() {
        return `${this.firstName} ${this.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value : 50,
    writable : false
})

person.age = 55;

// person.firstName = 'Sena';
// person.fullName = 'Çınar Turan'
// console.log(person.fullName);
console.log(person.age);
*/


// *** Call,Apply & Bind


/*
var welcome = function(a,b){
    console.log('Welcome '+this.name+'.Are you interested in '+a+' and '+b);
}

var yigit = {name:'Yiğit'};
var ada = {name : 'Ada'};

welcome.call(yigit,'asp.net','angular');
welcome.call(ada,'asp.net','angular');

welcome.apply(yigit,['asp.net','angular']);
welcome.apply(ada,['asp.net','angular']);

var welcomeYigit = welcome.bind(yigit);
welcomeYigit('asp.net','ada');

var welcomeAda = welcome.bind(ada);
welcomeAda('asp.net','angular');
*/


// *** Error Handling (Try/Catch)


/*
try {
    console.log(fonk());
}

catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
}

let user = {
    name: "hakan"
}

try {
    console.log(user.name);
}
catch (e) {
    console.log(e);
}

try {
    console.log(user.surname);
}
catch (e) {
    console.log(e);
}


var user = {
    name: 'Sadık Turan'
}

try {
    // console.log(myFunction());
    console.log(user.name);
    if(!user.email){
        throw new Error('User has no email');
    }
}
catch(e){
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
}
finally{
    console.log('finally block');
}
*/