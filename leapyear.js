// leap year account

let year = parseInt(prompt("Enter a year", "2020"));
let leapyear =(year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0);

console.log(year + " leapyear ? : " + leapyear);





