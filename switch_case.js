let weekDays = 7;

if (weekDays === 1) {
    console.log("Pazartesi");
} else if (weekDays === 2) {
    console.log("Salı")
} else if (weekDays === 3) {
    console.log("Çarşamba")
} else if (weekDays === 4) {
    console.log("Perşembe")
} else if (weekDays === 5) {
    console.log("Cuma")
} else {
    console.log("Weekends")
}

switch (weekDays){
    case 1: 
    console.log("Pazartesi"); 
    break;
    case 2: 
    console.log("Salı"); 
    break;
    case 3: 
    console.log("Çarşamba"); 
    break;
    case 4: 
    console.log("Perşembe"); 
    break;
    case 5: 
    console.log("Cuma"); 
    break;
    case 6: 
    console.log("Cumartesi"); 
    break;
    case 7: 
    console.log("Pazar"); 
    break;
    default: 
    console.log("invalid day entered")
}
console.log("Switch from out")