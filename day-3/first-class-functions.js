// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/*
I: Function takes in an input base that can be either a string or a number
O: Return a function that returns true if the inputted value is greater than the base inputted into the original function, false otherwise
C: N/A
E: N/A
*/

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function
    return function(value){
        // return the boolean resulting from checking if the input value is greater than the base value
        return value > base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */

/*
I: Function takes in an input base that can be either a string or a number
O: Return a function that returns true if the inputted value is lesser than the base inputted into the original function, false otherwise
C: N/A
E: N/A
*/

function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function
    return function(value){
        // return the boolean resulting from checking if the input value is lesser than the base value
        return value < base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

/*
I: Function takes in a single character (string given to parameter named startsWith)
O: Return a function that returns true if the first character of the inputted string is equal to the single character inputted into the original function, false otherwise
C: N/A
E: Function must be case insensitive
*/

function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

    // uncapitalize the inputted single character
    startsWith = startsWith.toLowerCase();
    
    // return a function
    return function(string){
        // uncapitalize the inputted string
        string = string.toLowerCase();

        // return the boolean resulting from checking if the first character of the input string is equal to the single character (startsWith)
        return string[0] === startsWith;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

/*
I: Function takes in a single character (string given to parameter named endsWith)
O: Return a function that returns true if the last character of the inputted string is equal to the single character inputted into the original function, false otherwise
C: N/A
E: Function must be case insensitive
*/

function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    // uncapitalize the inputted single character
    endsWith = endsWith.toLowerCase();
    
    // return a function
    return function(string){
        // uncapitalize the inputted string
        string = string.toLowerCase();

        // return the boolean resulting from checking if the last character of the input string is equal to the single character (endsWith)
        return string[string.length - 1] === endsWith;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

/*
I: Function takes in an array of strings and a function to modify each string with
O: Returns a new array created from the modified strings from the original input array
C: N/A
E: N/A
*/

function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // create a new empty array
    var newArr = [];

    // loop through the strings array
    for (let i = 0; i < strings.length; i++){
        // push (to newArr) the result of using the modify function on the current value from the strings array
        newArr.push(modify(strings[i]));
    }

    // return newArr
    return newArr;
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

/*
I: Function takes in an array of strings and a function to test each string
O: Returns a boolean if every string in the input array passed the input function's test
C: N/A
E: N/A
*/

function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // loop through the strings array
    for (let i = 0; i < strings.length; i++){
        // determine if the current value from the strings array fails the test function's test
        if (!test(strings[i])){
            //return false if so
            return false;
        }
    }

    // return true if none of the tests fail
    return true;
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}