// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: Function takes in a string
O: Returns number representing length of the input string
C: N/A
E: N/A
*/


function length(string) {
    // YOUR CODE BELOW HERE //

    // return the string property of the input string
    return string.length;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
I: Function takes in a string
O: Return a new string that is the lowercased version of the input string
C: N/A
E: N/A
*/

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   
    // create new string assigned to the result of using the .toLowerCase() method on the input string
    var newString = string.toLowerCase();
    // return the new string
    return newString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I: Function takes in a string
O: Return a new string that is the uppercased version of the input string
C: N/A
E: N/A
*/

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // create new string assigned to the result of using the .toUpperCase() method on the input string
    var newString = string.toUpperCase();
    // return the new string
    return newString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/*
I: Function takes in a string
O: Return a new string that has had its spaces (" ") replaces with dashes ("-") and is the lowercased version of the input string
C: N/A
E: N/A
*/

function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    // create new string assigned to the result of using the .toLowerCase() method on the input string
    var newString = string.toLowerCase();
    // replace all spaces in the new string with dashes
    newString = newString.replaceAll(" ", "-");
    // return the new string
    return newString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: Function takes in a string and a single character (presumably a letter)
O: Return a boolean that says true if the single character and the first character of the string are the same character, but returns false otherwise
C: N/A
E: Whether the character is uppercase or lowercase should not affect the output of the function
*/

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //make both the input string and input char lowercase
    string = string.toLowerCase();
    char = char.toLowerCase();

    //determine if char and the first character of string are equal
    if (string[0] === char){
        //return true if so
        return true;
    }

    //return false otherwise
    return false;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}