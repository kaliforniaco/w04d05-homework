
//this is grabbing everything that was exported from the other file

//everything that was attached to module.exports

// MY is the name of the object that is created by the object

const my = require('./my-module');

console.log(my, 'this is my module');

console.log(my.name, 'this is name');

console.log(my.someArr, 'this is someArr'); 
console.log(my.getNumber(), 'this is getNumber');

console.log(my.number, ' this is the number/SCOPE');

//MODULE a code or file that can be exported or used in another file

//1. Module, just like functions, should srive to do one thing really well.
//
//Examples: express module for serverside framework
//			modules to parse http requests
//			modules to organize code in a MVC structure
//			
