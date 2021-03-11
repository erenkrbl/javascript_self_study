console.log("Hello World");

// Data types (two types of data)
// Primitive and Reference 
// Primitive data type: Number, String, Boolean, Undefined, Null, Symbol
// Reference data type:Object

// type number

let number = 50;
console.log(number);
console.log(typeof number);

let floatNumber = 25.452;
console.log(floatNumber);
console.log(typeof floatNumber);

let negativeNumber = -20;
console.log(negativeNumber);
console.log(typeof negativeNumber);

// type string

let firstName = "Arthur";
console.log(firstName);
console.log(typeof firstName);

let lastName = 'King';
console.log(lastName);
console.log(typeof lastName);

let fullName = firstName + " " + lastName;
console.log(fullName);

// template literal - backtick

let fullName1 = `${firstName} ${lastName}`
console.log("template literal :" + fullName1);
console.log(`template literal with print :  ${fullName1}`);

let statement = "Arthur's computer";
console.log(statement);

 // escape expressions backslash
let statement1 = 'Arthur\'s computer';
console.log(statement1);

//type boolean

let primeNumber = true;
console.log("Data type value : " +  primeNumber + " data type :" + typeof primeNumber);
console.log(`Data type value : ${primeNumber} data type : ${typeof primeNumber}`);

// type undefined

let color;
console.log(color);
console.log(typeof color);

// type null

let age = null;
console.log(age);
console.log("value : " + age + "data type : " + typeof age)