// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/*
I: Function takes in an array
O: Console log each value in the array
C: N/A
E: N/A
*/

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // loop through the input array
  for (let i = 0; i < array.length; i++){
    // print the current array value
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/*
I: Function takes in an array
O: Console log each value in the array backwards
C: N/A
E: N/A
*/

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // loop through the input array backwards
  for (let i = array.length - 1; i >= 0; i--){
    // print the current array value
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*
I: Function takes in an object
O: Return an array made up of the keys from the input object
C: N/A
E: N/A
*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // create an empty array
  var array = [];

  // loop through the input object
  for (var key in object){
    // add the current key to the array
    array.push(key)
  }

  // return the array
  return array;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/*
I: Function takes in an object
O: Console log each key in the object
C: N/A
E: N/A
*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // loop through the input object
  for (var key in object){
    // print the current key
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/*
I: Function takes in an object
O: Return an array made up of the values from the input object
C: N/A
E: N/A
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // create an empty array
  var array = [];

  // loop through the input object
  for (var key in object){
    // add the current value to the array
    array.push(object[key])
  }

  // return the array
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/*
I: Function takes in an object
O: Console log each value in the object
C: N/A
E: N/A
*/

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // loop through the input object
  for (var key in object){
    // print the current value
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/*
I: Function takes in an object
O: Return a number equivalent to the amount of key/value pairs in the input object
C: N/A
E: N/A
*/

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // create a pairNumber variable and set it to 0
  var pairNumber = 0;

  // loop through the input object
  for (var key in object){
    // increment the pairNumber variable by 1 for each key/value pair looped through
    pairNumber++;
  }

  // return the pairNumber variable
  return pairNumber;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/*
I: Function takes in an object
O: Console log each value in the object backwards (in reverse)
C: N/A
E: N/A
*/

function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // create an empty array
  var array = [];

  // loop through the input object
  for (var key in object){
    // add the current value to the array
    array.push(object[key])
  }

  // loop through the array in reverse
  for (let i = array.length - 1; i >= 0; i--){
    // print each current object value stored in the array
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}