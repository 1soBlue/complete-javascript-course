// let population = [23, 105, 45, 50];
// console.log(population.length === 4 ? true : false)
// function percentageOfWorld1(population){
//     return (population / 7900) * 100;
// }
// let percentages =[percentageOfWorld1(population[0]), percentageOfWorld1(population[1]),percentageOfWorld1(population[2]), percentageOfWorld1(population[3])];
// console.log(percentages);

// const neighbors = ['Afghanistan', 'Bhutan', 'India', 'Kazakhstan', 'Kyrgyzstan', 'Laos', 'Mongolia', 'Myanmar (Burma)', 'Nepal', 'North Korea', 'Pakistan', 'Russia', 'Tajikistan', 'Vietnam'];
// neighbors.push("Utopia");
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);
// console.log(neighbors.includes("Germany") === false ? "Probably not a central European country :D" : "A central Eruopean country")
// neighbors[2] = "The federation of India";

function calcTip(bill){
    if(bill < 50)
    {
        return bill * 0.2;
    }
    else if(bill <= 300)
    {
        return bill * 0.15;
    }
    else{
        return bill * 0.2;
    }
}
let bills = [125, 555, 44];
let total = [calcTip(bills[0])+ bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
console.log(total);