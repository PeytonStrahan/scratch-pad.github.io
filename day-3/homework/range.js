// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

/*
I: Function takes in two integers
O: Returns an array including the two inputted integers and all integers between them in order
C: N/A
E: if the first inputted integer in greater than the second, then list the integers in the array from greatest to least, otherwise list them from least to greatest
*/

function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    // create a new empty array
    var newArr = [];

    // determine if start is greater than end
    if (start > end){
        // make a loop that decrements from the start value to the end value
        for (let i = start; i >= end; i--){
            // push each value into newArr
            newArr.push(i);
        }
    }
    // otherwise, make a loop that increments from the start value to the end value
    else {
        for (let i = start; i <= end; i++){
            // push each value into newArr
            newArr.push(i);
        }
    }

    //return the new array (newArr)
    return newArr;
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}