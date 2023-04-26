let DScoreOne = 97, DScoreTwo = 112, DScoreThree= 101, KScoreOne = 109, KScoreTwo = 95, KScoreThree = 123;
let DScoreUnder100, KScoreUnder100;
if(DScoreOne < 100 && DScoreTwo < 100 && DScoreThree < 100){
    DScoreUnder100 = true;
}else{
    DScoreUnder100 = false;
}
if(KScoreOne < 100 && KScoreTwo < 100 && KScoreThree < 100){
    KScoreUnder100 = true;
}else{
    KScoreUnder100 = false;
}
let winner;
let DScoreAverage = (DScoreOne + DScoreTwo + DScoreThree) / 3;
let KScoreAverage = (KScoreOne + KScoreTwo + KScoreThree) / 3;
if(DScoreUnder100 === true && KScoreUnder100 === true){
    winner = "None";
}else if(DScoreUnder100 === true && KScoreUnder100 === false){
    winner = "Koalas";
}else if(DScoreUnder100 === false && KScoreUnder100 === true){
    winner = "Dolphins";
}else if(DScoreAverage === KScoreAverage){
    winner = "None";
}else if(DScoreAverage > KScoreAverage){
    winner = "Dolphins";
}else{
    winner = "Koalas";
}
if(winner === "None"){
    console.log("Draw");
}else{
    console.log(`Winner is ${winner}`);
}