// function scope

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