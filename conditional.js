
let myAge = 35, yourAge = 40;

if (myAge < yourAge) {
    console.log("I am smaller than you");
} else if (myAge == yourAge) {
    console.log("We are the same age");
} else {
    console.log("I am bigger than you");
}

// ternary literals

let a = 5, b = 30, c = 0;

if (a > b) {
    c = a + b;
    console.log("C value : " + c);
} else {
    c = a - b;
    console.log("C value : " + c);
}

c = (a > b) ? (a + b) : (a - b);
console.log("C value : " + c);