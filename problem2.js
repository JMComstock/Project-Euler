'use strict';

// Each new term in the Fibbonacci sequence is generated by adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be: 
// 1,2,3,5,8,13,21,34,55,89,...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms

function findEvenSumFibb() {

    let i = 1;
    let j = 2;
    let sum = 0;

    for (; i < 4000000;) {

        if (i % 2 === 0) {
            sum += i;
        }

        let temp = i;
        i = j;
        j = temp + i;

    }

    console.log("The sum of the even-valued terms below 4 million is: " + sum);
}

findEvenSumFibb();
