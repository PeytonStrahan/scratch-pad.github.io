// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

/* 1.
I: Function takes in three properties
O: Returns a contact object
C: N/A
E: N/A
*/

/* 2.
I: N/A
O: Returns an object that manages contact objects
C: N/A
E: N/A
*/

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an unnamed object holding keys with each of this function's inputs assigned as properties
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            // return the length of the contacts array
            return contacts.length;
        },
        addContact: function(contact) {
            // adds the inputted contact object to the contacts array
            contacts.push(contact);
        },
        findContact: function(fullName) {
            // split the inputted fullName into the first and last names in an array and assign said array to a variable
            var firstAndLast = fullName.split(" ");

            // loop through the contacts array
            for (let i = 0; i < contacts.length; i++){
                // determine if the first and last names of the current contact matches the inputted first and last names
                if (firstAndLast[0] === contacts[i].nameFirst && firstAndLast[1] === contacts[i].nameLast){
                    // return the current contact if so
                    return contacts[i];
                }
            }
            // return undefined if the loop finds no matches (this function can technically do it without this line of code due to how functions work, but whatever)
            return undefined;
        },
        removeContact: function(contact) {
            // loop through the contacts array
            for (let i = 0; i < contacts.length; i++){
                // determine if the id of the current contact matches the id of the inputted contact
                if (contact.id === contacts[i].id){
                    // remove the current contact if so
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function() {
            // create an empty string
            var allNames = "";

            // loop through the contacts array
            for (let i = 0; i < contacts.length; i++){
                // add the current contact's first and last names onto the allNames string
                allNames = allNames + contacts[i].nameFirst + " " + contacts[i].nameLast;
                // determine if the current contact is the last in the contacts list
                if (i === contacts.length - 1) {
                    // return the allNames string if so
                    return allNames;
                }
                // otherwise, add a line-break and let for loop repeat
                allNames = allNames + "\n";
            }
        }
       
    }
}

makeContactList(); // => { length: function(){}, addContact: function(){}, findContact: function(){}  }



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}