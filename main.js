/* // function scope

// function a() {
//     var name = 'Eric';
//     if (5>4){ // block scope
//         console.log(name);
//         var fname = 'Joseph';
//     }
//     for (i = 0; i < 3; i++) { // block scope
//         console.log(name);
//         console.log(fname);
//     }
//     console.log(++i)
//     var fname = 'Assan';
//     console.log(fname);
// }
// a();

//variables created with const or let block scope
function b() {
    let name = 'Tom';
    if (5 > 2) {
        console.log(name);
        let fname = 'Oliver';
    }
    console.log(name);
    //console.log(fname); // ReferenceError: fname is not defined
    
    for (i = 0; i < 2; i++) {
        console.log(i);
    }

    //let name = 'Harold'; // SyntaxError: Identifier 'name' has already been declared
    console.log(i);

    // craete a constant with const

    // const lname = 'Moon';
    // lname = 'Gold'; // TypeError: Assignment to constant variable.
    const obj = {  
        fname : 'Sam',
        lname : 'Sun',
    }

    obj.fname = 'Jake';
    console.log(obj);
    //obj = 'Elon'; // TypeError: Assignment to constant variable.

    

    // console.log(a); // ReferenceError: Cannot access 'a' before initialization
    // let a = 20;


}
b();

// var, let, const diiferents

// We cannot reassign in const
// No hosting feature in let and const
// var function scope, let and const block scope
// const and let not assing to global object
// var assing to global object

var test = 'test';
let test1 = 'test1';
const test2 = 'test2';
*/
// Immediately-invoked Function Expression (IIFE) 
// Hemen çağrılan İşlev İfadesi

/*(function() {
    let name = 'John';
    const age = 32;

    console.log("Hello, I am " + name + " and my age " + age);
})();

// console.log(age); // ReferenceError: age is not defined
*/

// this
// 1 Implicit binding==> fonksiyonun çağrıldığı noktanın solunda ne var sa this onu temsil eder


// object literal
const eric = {
    fname : 'Eric',
    age : 39,
    sayName : function() {
        console.log(this);
        console.log(this.fname);
    },
    sayAge : function () {
        console.log(this);
        console.log(this.age);
    }

}

//eric.sayName();
//eric.sayAge();

const henry = {
    fname : 'Henry',
    age : 33,
    sayName : function() {
        console.log(this);
        console.log(this.fname);
    },
    sayAge : function () {
        console.log(this);
        console.log(this.age);
    }

}

//eric.sayName();
// henry.sayAge();

// window binding

/**
 * const sayMyName = function () {
 * console.log(this)
 * console.log(this.name)
 * }
 */
// Both same
// const sayMyName = eric.sayName;
// sayMyName();

// 2 explicit bindings
// call, bind, apply
/*
const elvin = {
    fname : 'Elvin',
    age : 32,
    scholl : 'Oxford',
}

const harold = {
    fname : 'Harold',
    age : 22,
    scholl : 'Hardward',
}

const infoWrite = function(...args) {
    console.log(this);
    console.log(`My name is ${this.fname}, my age ${this.age}, my scholl ${this.scholl}`);
    console.log(`My favorite colors ${args}`);
}

infoWrite.call(elvin);
//infoWrite.call(harold);
infoWrite.call(elvin, 'red', 'blue');
infoWrite.apply(elvin, ['green', 'yellow', 'black']);

const saying = infoWrite.bind(harold, ['blue', 'yellow', 'white']);
saying();

// new binding

const Car = function(color, model) {
    this.color = 'My car ' + color;
    this.model = model;
    this.information = function(){
        console.log(this.color);
        console.log(color);
    }

}

const honda = new Car('red', 'civic');
honda.information();

console.log(this);
*/

// 1 eric.method();
// 2 method.bind(harold);
// 3 new
// window


// arrow function

// function funcfirst(){
//     console.log(this);
// }

// funcfirst();

// const number = 15;

// const funcsecond = () => {
//     console.log(this);
//     //console.log(number);
// }

// funcsecond();

// var fname = 'terry';
/*
const terry = {
    fname : 'terry',
    sayNane : () => {
        console.log(this);
        console.log(this.fname);
    }
}

terry.sayNane();

const herry = {
    fname : 'terry',
    sayNane () {
        console.log(this);
        console.log(this.fname);
    }
}

herry.sayNane();
*/

const scholl = {
    studentName : ['Eric', 'Harold', 'John'],
    id : [1234, 2345, 3456],
    studentWrite () {
        const that = this;
        this.studentName.forEach(function (sname, index) {
            console.log(that);
            console.log(sname, that.id[index]);
        });
    },
    idWrite(){
        this.id.forEach(function(id, index){
            console.log(id);
            console.log(this);
        }.bind(this));
    },
    studentNumberGive() {
        setTimeout(() => {
            console.log(this);
            console.log('Student number total : ' + this.studentName.length);
        }, 2000);
    }
}

// scholl.studentWrite();
// scholl.idWrite();
// scholl.studentNumberGive();

// AddEventListener

// const titles1 = document.querySelector('h1');
// const titles2 = document.querySelector('h2');
// const titles3 = document.querySelector('h3');

// titles1.addEventListener('click', function(e) {
//     console.log(this);
// });

// titles2.addEventListener('click', titleClick);

// const number = 30;
// function titleClick (e) {
//     console.log(e.target);
//     console.log(this);
//     console.log(number);

// }

class Screns {
    constructor() {
        this.titles1 = document.querySelector('h1');
        this.titles2 = document.querySelector('h2');
        this.number = 20;
        this.titles3 = document.querySelector('h3');

        this.titles1.addEventListener('click', function() {
            console.log(this);
        });
        this.titles2.addEventListener('click', this.title2Click.bind(this));

        this.titles3.addEventListener('click', () => {
            this.title3Click();
        });
    }
    title2Click() {
        console.log('Worked');
        console.log(this);
        console.log(this.number);
    }
    title3Click() {
        console.log('Worked');
        console.log(this);
        console.log(this.number);
    }


}

const screens = new Screns();