/*
let language = "Chinese";
let country = "Taiwan";
let continent = "Asia";
let population = 130;
let isIsland = true;
let description = `${country} is  in ${continent}, and its ${population} people speak ${language}`;
console.log(description);
if(population > 33){
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${33 - population} below average`);
}


let javaScriptIsFun = true;
console.log(javaScriptIsFun)
console.log(typeof true)
console.log(typeof 23)
console.log(typeof "just to prove")

let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);
javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);
javaScriptIsFun = undefined;
console.log(typeof javaScriptIsFun);
javaScriptIsFun = null;
console.log(typeof javaScriptIsFun)

let language;

let age = 30;
age = 31;
const birthYear = 1994;
birthYear = 1995;
const birthDay;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log('9' - '5'); //Ans:4
console.log('19' - '13' + '17'); //Ans:617
console.log('19' - "13" + "17"); //ANS:617
console.log("123" < 57); //ANS:false
console.log(5 + 6 + '4' + 9 - 4 - 2); //ANS:1143
*/
/* IF statements
let age = prompt("What age are you?");
if(Number(age) < 19){
    console.log("So young!!!");
}
else if(Number(age) < 30){
    console.log(`${age} is a great age!`);
}
else{
    console.log("You're old!");
}*/
// const hasDriverLicense = true;
// const hasGoodVision = false;
// console.log(hasDriverLicense || hasGoodVision);
// const shouldDrive = hasDriverLicense && hasGoodVision;
// const isTired = true;
// let numNeighbours = prompt("How many neighbour countries does your country have");
// if(numNeighbours == 1){
//     console.log("Only 1 border!");
// }else if(numNeighbours > 1){
//     console.log("More than 1 border.");
// }
// else{
//     console.log("No borders");
// }
// let language = "English";
// let country = "Taiwan";
// let continent = "Asia";
// let population = 23;
// let isIsland = false;xw
// if(language === "English" && population < 50 && isIsland === false){
//     console.log(`You should live in ${country}`);
// }else{
//     console.log(`${country} does not meet your criteria`);
// }
const day = "monday";
switch(day){
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup.");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Weite code examples");
        break;
    default:
        console.log("Not a valid day!");
}