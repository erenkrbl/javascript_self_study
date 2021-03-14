let randomNumber = (Math.random() * 100) + 1;
randomNumber = Math.floor(randomNumber);

let userNumber = parseInt(prompt("You are entered a number", "10"));

let randomNumberBB = randomNumber % 10; 
let randomNumberOB = Math.floor(randomNumber / 10);

console.log(`Random number BB ${randomNumberBB} OB ${randomNumberOB}`);

let userNumberBB = userNumber % 10; 
let userNumberOB = Math.floor(userNumber / 10);

console.log(`User number BB ${userNumberBB} OB ${userNumberOB}`);

console.log(`Random number ${randomNumber} user number ${userNumber}`);

if (randomNumber === userNumber) {
    console.log("You won 1000$.User number : " + userNumber + "random number : " + randomNumber);
} else if (userNumberBB === randomNumberOB && userNumberOB === randomNumberBB) {
    console.log("You won 500$.User number : " + userNumber + "random number : " + randomNumber);
} else if (randomNumberBB === userNumberBB || randomNumberOB === userNumberOB) {
    console.log("You won 100$.User number : " + userNumber + "random number : " + randomNumber);
} else {
    console.log("Sorry You didn't win anything.");
}
