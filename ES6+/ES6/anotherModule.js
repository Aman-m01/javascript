// // anotherModule.js
// import { myFunction, myVariable } from './myModule.js';
// myFunction(); // outputs 'Hello, world!'
// console.log(myVariable); // outputs 'This is a variable'


// anotherModule.js
import * as myModule from './myModule.js';

myModule.myFunction(); // outputs 'Hello, world!'
console.log(myModule.myVariable); // outputs 'This is a variable'