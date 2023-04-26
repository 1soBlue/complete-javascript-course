const calcAverage = (g1, g2, g3) => (g1 + g2 + g3)/ 3;
function checkWinner(avgDolphins, avgKoalas){
    if((avgDolphins / avgKoalas) >= 2){ 
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
        return 0;
    }
    else if((avgKoalas / avgDolphins) >= 2){ 
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
        return 0;
    }
    else{
        console.log(`No one wins`);
        return -1;
    }
}
checkWinner(calcAverage(44,23,71),calcAverage(65,54,49));
checkWinner(calcAverage(85,54,41),calcAverage(23,34,27));