'use strict';

// Find the sum of all the multiples of 3 to 5 below 1000

function findMultSum(x, y) {
    x = 3;
    y = 5;
    let i;
    let sum = 0;

    for (i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    
    console.log("The sum of the multiples from 0 to 1000 of 3 and 5 is: " + sum);
}

findMultSum();

