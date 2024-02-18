'use strict';

// The prime factors of 13195 are 5,7,13 and 29.

// What is the largest prime factor of the number 600851475143?

function largestPrimeFactor () {

    var divisor = 2;
    var number = 600851475143;

    while(number > 1){
        
        if(number % divisor === 0){ 
            number /= divisor;
        } else {
            divisor++;
        }
    }
    console.log(divisor); 

}

largestPrimeFactor();