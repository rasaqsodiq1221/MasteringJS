/* 'use strict'

// function declaration va function expressions

// function declaration
function calFinalPrice(priceBeforeTax) {
    const TAX = 30
    return priceBeforeTax + (priceBeforeTax * (TAX/100))
}   

console.log(calFinalPrice(200))

// function expression 
const calFinalPrice2 = function(priceBeforeTax) {
    const TAX = 30
    return priceBeforeTax + (priceBeforeTax * (TAX/100))
}

console.log(calFinalPrice2(200))
 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3

const avgDolphins = calcAverage(300,300,300)
const avgKoalas = calcAverage(23,34,37) 

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${Math.floor(avgDolphins)}-${Math.floor(avgKoalas)})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${Math.floor(avgKoalas)}-${Math.floor(avgDolphins)})`)        
    } else {
        console.log("we have no winner")
    }
}

// avgDolphins(44,23,71);
// avgKoalas(65,54,49);

checkWinner(avgDolphins,avgKoalas);