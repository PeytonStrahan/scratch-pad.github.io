// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */

/*
I: Function takes in a value
O: Return true if the input value is an array, false otherwise
C: N/A
E: N/A
*/

function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // Determine if the input value is an array and return the resulting boolean
    return Array.isArray(value);
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */

/*
I: Function takes in a value
O: Return true if the input value is an object intended as a collection, false otherwise
C: N/A
E: Using only "typeof" will result in certain values being considered objects despite not being an object intended as a collection
*/

function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // Determine if the input value is an array
    if (Array.isArray(value)){
        // return false if so
        return false;
    }

    // Otherwise, determine if the input value is null
    if (value === null){
        // return false if so
        return false;
    }
    
    // Otherwise, determine if the input value is an instance created from the Date constructor function
    if (value instanceof Date){
        // return false if so
        return false;
    }

    // Otherwise, determine if the input value is considered to be an 'object' by the typeof operator
    if (typeof value === 'object'){
        // return true if so
        return true;
    }
    
    // Otherwise, return false
    return false

    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

/*
I: Function takes in a value
O: Return true if the input value is an object or array intended as a collection, false otherwise
C: N/A
E: Using only "typeof" will result in certain values being considered objects despite not being an object or array intended as a collection
*/

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // Otherwise, determine if the input value is null
    if (value === null){
        // return false if so
        return false;
    }
    
    // Otherwise, determine if the input value is an instance created from the Date constructor function
    if (value instanceof Date){
        // return false if so
        return false;
    }

    // Otherwise, determine if the input value is considered to be an 'object' by the typeof operator (both arrays and objects are considered 'objects' in this sense)
    if (typeof value === 'object'){
        // return true if so
        return true;
    }
    
    // Otherwise, return false
    return false
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 

/*
I: Function takes in a value
O: Return a string representing the type of the input value
C: N/A
E: Using only "typeof" will result in certain values being considered objects despite not being an object or array intended as a collection
*/

function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // Determine if the input value is an array
    if (Array.isArray(value)){
        // return "array" if so
        return "array";
    }

    // Otherwise, determine if the input value is null
    if (value === null){
        // return "null" if so
        return "null";
    }
    
    // Otherwise, determine if the input value is an instance created from the Date constructor function
    if (value instanceof Date){
        // return "date" if so
        return "date";
    }

    // Otherwise, return the result of the typeof operator to cover all remaining value types
    return typeof value;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}