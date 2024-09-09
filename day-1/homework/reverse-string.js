// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/*
I: Function takes in a string
O: Return a new string that is the reversed version of the input string
C: You cannot use a method to solve this problem, must use a for loop
E: N/A
*/

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    // create a variable to hold our result
    var output = "";
    // loop through the input string
    for (var i = input.length - 1; i >= 0; i--){
      // add current letter to output
      output += input[i]; // output = output + input[i]
    }
    // return output variable
    return output;
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}