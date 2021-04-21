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
/*
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
*/

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
/*
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
*/
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
/*
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
*/

// CLOSURE

// closure kendi parent functionu çalıştırıp sonlansa bile parent scope'a
// erişebilen fonksiyondur.
//
//Bir fonksiyonda bulunan local değişkenlerin fonksiyon
//retun edildikten sonra bile saklanmasıdır

/*

const multiplyWithTwo = number => number * 2;

const r1 = multiplyWithTwo(5);
const r2 = multiplyWithTwo(9);

console.log(r1, r2)

const out = () => {
    let count = 0;
    const increase = () => {
        count++;
        console.log(count);
    }
    return increase;
}

const result = out();
const result2 = result();

result();
result();
result();
*/

// CLOSURE EXAMPLE 1
/*

const numberSum = () => {
    console.log("Function start");

    const a = 20, b = 30;

    const sumNum = () => {
        console.log("Total " + (a + b));
    }

    setTimeout(sumNum, 6000);
    //return sumNum;
    console.log("Function end");
}

numberSum();

const result = numberSum();
result();
*/

// CLOSURE EXAMPLE 2

/*
const counterFunction = () => {
    console.log("Function start");
    let count = 0;
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');

    h1.addEventListener('click', ()=>{
        count++;
        console.log('INCREASE: ' + count);

    });
    h2.addEventListener('click', ()=>{
        count--;
        console.log('DECREASE: ' + count);
    });
    console.log("Function end");
}

counterFunction();
*/

// CLOSURE EXAMPLE 3
/*
const calculator = (num1, num2) => {
    function numberSum () {
        console.log('Sum of numbers: ', (num1 + num2));
    }

    function numberMultiply () {
        console.log("Multiplication of numbers: " + (num1 * num2));
    }

    return {
        numberSum,
        numberMultiply
    }

}

const app = calculator(7, 8);
app.numberSum();
app.numberMultiply();

console.log(app);
*/

// CLOSURE EXAMPLE 4
/*
function stopWatchApp () {
    let startTime = Date.now();
    console.log('Start time: ' + startTime);

    function longTake () {
        let lastTime = Date.now() - startTime;
        console.log('Elapsed time : ' + lastTime + ' milliseconds');
    }

    return longTake;
}

const stopWatch = stopWatchApp();

for (i = 0; i < 50000; i++) {
    let temporary = Math.random() * 5000;
}

stopWatch();
*/
// 1- memory 2- Encapsulation
// EXAMPLE 5

function studentsFind (id) {
    const studentArray = new Array(10).fill({studentName: '', id: 0})
        .map(function(std, index) {
            return {
                studentName : 'Student ' + index,
                id: index, 
            }
        });

    console.log('Array created and fill');
    return studentArray[id];    
}

// console.log(studentsFind(5));
// console.log(studentsFind(6));
// console.log(studentsFind(3));
// console.log(studentsFind(1));
// console.log(studentsFind(8));

/*
function studentAffairs() {
    const studentArray = new Array(10).fill({studentName: '', id: 0})
        .map(function(std, index) {
            return {
                studentName : 'Student ' + index,
                id: index, 
            }
        });
    
    console.log('Array created and fill');

    function studentsFind(id) {
        return studentArray[id];
    }
    return studentsFind;
}

const find = studentAffairs();
console.log(find(5));
console.log(find(6));
console.log(find(4));
console.log(find(8));
*/

// 2- Encapsulation

function studentAffairs() {
    const studentArray = new Array(10).fill({studentName: '', id: 0})
        .map(function(std, index) {
            return {
                studentName : 'Student ' + index,
                id: index, 
            }
        });
    
    console.log('Array created and fill');

    function studentsFind(id) {
        return studentArray[id];
    }
    function studentsUpdate(id) {
        return studentArray[id];
    }
    function studentsDelete(id) {
        return studentArray[id];
    }
    return {
        find :studentsFind,
        update : studentsUpdate,
        delete : studentsDelete,
    
    };
}

const affairs = studentAffairs();
console.log(affairs.find(5));
console.log(affairs.update(6));
console.log(affairs.delete(1));
