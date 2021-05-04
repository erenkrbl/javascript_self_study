// for loops
// for (ilk atama; döngü çalıştırma şartı; her çalışma sonrası olacak 

for ( let i = 0; i < 5; i++) {
    console.log("My name is Eren");
}

for (let i = 0, j = 0; (i + j) < 20; i = i + 5, j = j + 2) {
    console.log("i value : " + i + "," + " j value : " + j)
}

// While

for (let j = 5; j < 15; j++) {
    console.log("For loops Hello");
}

let number = 5;

while ( number < 15) {
    console.log("number");
    number++;
}

// do while

let age = 20;
do {
    console.log("Do while hello");
    age++;
} while (age < 30);

// break, continue, return

for (i = 0; i < 50; i++) {
    if (i==12) {
        break;
    }
    console.log("break used")
}


for ( let i = 10; i < 20; i++) {
    if ( i == 16){
        continue;
    }
    //console.log("Contunie used" + i)
}


// for içinde return kullanımı sadece fonksiyon içinde ise olur.
// aksi takdirde illegaal return stament hatası alınır    
   
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         //return;
//     }
//     console.log("Return used" + i)
// }

for(let i = 0; i < 5; i++) {
    //console.log("i  : ", i);
}

let sum = 0;
for(let i = 0; i <= 5; i++) {
    sum += i;
}
//console.log("sum : ", sum);

let multiply = 1;
for(let i = 1; i <= 5; i++) {
    multiply *= i;
}
//console.log("multiply: ", multiply);


let myString = 'Clarusway';
let result = "";

for (i= 0; i < myString.length; i++) {
    console.log(` ${i+1}.ci harf ${myString[i]}`);
    for(let j = 0; j < 2; j++) {
        result += myString[i] 
    }
}
//console.log(result);

let a = 0;

while (a < 5) {
    a++;
    console.log("a : " + a);
}

{
    let i = 0;
    let sum = 0;
    while(i < 5){
        i++;
        sum += i;
    }
    console.log("sum : ", sum);
}


