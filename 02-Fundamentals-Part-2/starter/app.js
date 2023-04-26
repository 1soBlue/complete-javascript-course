//01-Functions
// function describeCountry(country, population, capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }
// console.log(describeCountry("Japan",104,"Tokyo"))
//02-Functions

function percentageOfWorld1(population)
{
    let str = String(((population / 7900) * 100)) + '%';
    return str;
}
console.log(percentageOfWorld1(23));
console.log(percentageOfWorld1(53));
console.log(percentageOfWorld1(43));
let percentage = function(population){
    let percent = String(((population / 7900) * 100));
    return percent;
}

// 03- Functions
function describePopulation(country, population){
    return `${country} has ${population} million people, which is about ${percentage(population)}%`;
}
console.log(describePopulation("Taiwan", 23));
console.log(describePopulation("China", 1444));