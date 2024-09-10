// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

/*
I: Function takes in a number (hour)
O: Console log a message that varies depending on the value of the inputted hour
C: N/A
E: N/A
*/

function greeter(hour) {
    // YOUR CODE BELOW HERE //
    
    // determine if the inputted hour is 0, 11, or something in between
    if (hour >= 0 && hour <= 11){
        // print morning message if so
        console.log("Good Morning!")
    }
    // otherwise, determine if the inputted hour is 12, 16, or something in between
    else if (hour >= 12 && hour <= 16){
        // print afternoon message if so
        console.log("Good Afternoon!")
    }
    // otherwise, determine if the inputted hour is 17, 21, or something in between
    else if (hour >= 17 && hour <= 21){
        // print evening message if so
        console.log("Good Evening!")
    }
    // otherwise, print night message
    else {
        console.log("Good Night!")
    }
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}