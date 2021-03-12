// Girilen saniye değerininin dakika ve saniye cinsinden hesaplanması

let secondsString = prompt("Saniye değeri giriniz", "100");
let seconds = parseInt(secondsString);

let minute = parseInt((seconds / 60), 10);
let secondsRemaining = seconds % 60;

console.log(`You entered ${seconds} value : ${minute} miniute and ${secondsRemaining} seconds.`)
