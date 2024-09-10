// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I: N/A
O: Console log the numbers 1-100, but each multiple of 3 is replaced with the string "Fizz" and each multiple of 5 is replaced with the string "Buzz"
C: N/A
E: Console log "FizzBuzz" for numbers which are multiples of both three and five
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // create a for loop to loop through numbers 1 to 100
    for (let i = 1; i <= 100; i++){
        // determine if current number is evenly divisible by both 3 and 5
        if (i % 3 == 0 && i % 5 == 0){
            // print "FizzBuzz" if so
            console.log("FizzBuzz");
        }
        // otherwise, determine if current number is evenly divisible by 3
        else if (i % 3 == 0){
            // print "Fizz" if so
            console.log("Fizz");
        }
        // otherwise, determine if current number is evenly divisible by 5
        else if (i % 5 == 0){
            // print "Buzz" if so
            console.log("Buzz");
        }
        // otherwise, just print the current number
        else {
            console.log(i);
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}