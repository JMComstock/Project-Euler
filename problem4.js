'use strict'
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 
// -digit numbers is 9009 = 91 * 99.
// .

// Find the largest palindrome made from the product of two 
// 3-digit numbers.

// function isPalindrome (val) {
//     for(let i=0; i<val.length/2; i++) {
            
//         if(val[i] != val[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

function isPalindrome(number) {
    const strNumber = number.toString();
    const reversedStr = strNumber.split('').reverse().join('');
    return strNumber === reversedStr;
}

function largestPalindrome () {

    let largestPalindrome = 0;

    for (let i = 100; i<1000; i++) {
        for (let j = 100; j<1000; j++) {
            let product = i * j;

            if(isPalindrome(product) && product > largestPalindrome ) {
                largestPalindrome = product;
            }
        }
    }
    return largestPalindrome;
}

const answer = largestPalindrome();
console.log("The largest palindrome is: " + answer);
