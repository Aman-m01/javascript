// Async js , Callback
// js is a synchronous language.it is a single threaded lang.
//synchronous vs asynchronous programming
// callback functions --> A callback is a function passed as an argument to another function.This technique allows a function to call another function.A callback function can run after another function has finished


// // synchronous
console.log("script start")
for (i = 0; i <= 1000; i++)
    console.log(i)
console.log("script end")



// // Asynchronous
// //setTimeout
console.log("script start")
const id = setTimeout(() => {
    console.log("hello world")
}, 1000);
console.log("setTimeout ID is ", id)
console.log("script end")


// // setTimeout in 0ms 
console.log("script start")
setTimeout(() => {
    console.log("hello world")
}, 0);
console.log("script end")


// //setInterval
console.log("script start")
setInterval(() => {
    console.log(Math.random())
}, 1000);
console.log("script end ")

