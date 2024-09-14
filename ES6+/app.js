// import {name,age} from './extra.js'
// console.log("user name is ",name,"and age is ",age)


//ANOTHER METHOD ->The code import * as extra from './extra.js' is an ES6 module import statement that imports all the exported members from the module extra.js and binds them to an object named extra. This allows you to access all the exports from extra.js using the extra object.
import * as extra from './extra.js'
console.log("user name is ",extra.name,"and age is ",extra.age)