// 'use strict';

// function logger(){
//     console.log("My name is Jonas");
// }
// logger();
// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(5,0));

// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// // console.log(calcAge1(1994));
// // const calcAge2 = function (birthYear){
// //     return 2037 - birthYear;
// // }
// // const age2 = calcAge2(1991);

// // console.log(age1, age2);
// // //Arrow Function
// // const colcAge3 = birthYear => 2037 - birthYear;

// // const yearsUntilRetirement = birthYear =>{
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;
// //     return retirement;
// // }
// // console.log(yearsUntilRetirement(1991));
// // function cutFruitPieces(fruit){
// //     return fruit * 4;
// // }
// // function fruitProcessor(apples, oranges){
// //     const juice = `Huice with ${cutFruitPieces(apples)} apples and ${cutFruitPieces(oranges)} oranges.`;
// //     return juice;
// // }

// // function age(birthYear){
// //     return 2037 - birthYear;
// // }
// // function yersUntilRetirement(birthYear, firstName){
// //     const retirement = 65 - age(birthYear);
// //     if(retirement > 0){
// //         return `${firstName} retired in ${retirement} years`;
// //     }
// //     else{
// //         return `You are retiring`;
// //     }
// // }
// // let friends = ["Michael","Steven","Peter"];
// // let year = new Array(1991, 1984, 2008, 2020);
// // const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991]
// // function calcAge1(birthYear){
// //     return 2037 - birthYear;}
// // const years = [1990, 1967, 2002, 2010, 2018];
// const jonas = {
//     firstName: "Jonas",
//     friends: ["Michael", "Peter", "Steven"],
//     birthYear: 1991,
//     job: "teacher",
//     hasDriversLicense: true,
//     calcAge: function(birthYear){
//         this.age = 2037 - birthYear;
//         return this.age
//     },
//     summary: function(){
//         console.log(`My first name is ${this.firstName}, i am ${this.calcAge(this.birthYear)} years old, my occupation is ${this.job}.`);
//     }
// }
// jonas.summary();

// const myCountry = {
//     country: "ROC",
//     capital: "Taipei",
//     language: "Chinese",
//     population: 23,
//     neighbours: ["China", "Japan", "Philippines"],
//     describe: function(){
//         console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}, the country is ${this.checkIsland ? a : not} a island.`);
//     },
//     checkIsland: true
// }
// myCountry.describe();
// const markMiller = {
//     fullName: "Mark Miller",
//     weight: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }
// const johnSmith = {
//     fullName: "John Smith",
//     weight: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }
// markMiller.calcBMI();
// johnSmith.calcBMI();
// if(markMiller.bmi > johnSmith.bmi)
// {
//     console.log(`Mark's BMI(${markMiller.bmi}) is higher than John's BMI(${johnSmith.bmi})`);
// }
// else if(markMiller.bmi < johnSmith.bmi)
// {
//     console.log(`John's BMI(${johnSmith.bmi}) is higher than Mark's BMI(${markMiller.bmi})`);

// }
// else{
//     console.log(`Mark and Johm have the same BMI`);
// }

// const jonas = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
//     true
// ]
// const types = [];
// for(let i = 0; i < jonas.length; i++){
//     types[i] = typeof jonas[i]; //Line_A
//     types.push(typeof jonas[i]) //Line_B
// }
// const years = [
//     1991, 2007, 1969, 2020
// ];
// const ages = [];
// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// for(let i = 1; i < 51; i++){
//     console.log(`Voter number ${i} is currently voting`);
// }
// const populations = [
//     213.4, 104.3, 98.7, 38.1
// ];
// function percentageOfWorld1(population){
//     return (population / 7900) * 100;
// }
// const percentages2 = [];
// for(let i = 0; i < 4; i++){
//     percentages2[i] = percentageOfWorld1(populations[i]);
// }
// console.log(percentages2);
// const listOfNeighbours = [
//     ["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]
// ];
// for(let i = 0; i < listOfNeighbours.length; i++)
// {
//     for(let n = 0; n < listOfNeighbours[i].length; n++)
//     {
//         console.log(`Neighbour: ${listOfNeighbours[i][n]}`);
//     }
// }
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}
