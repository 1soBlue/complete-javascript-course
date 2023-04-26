
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95
/*
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76
*/
let bmiMark = markWeight / markHeight ** 2;
let bmiJohn = johnWeight / johnHeight ** 2;
if(bmiMark > bmiJohn){
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
}else{
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}
