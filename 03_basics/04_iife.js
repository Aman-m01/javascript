/* IIFE-> Immediately Invoked Function Expression. sometimes our code are polluted due to global execution ,to remove it eife is used.it reuns as soon as it is defined.
 syntax-- ()() -- here we wrap the function in ()and then call it ().
 -- when we use the IIFE method then it has no idea in which context it will be stop, so to work it correctly without error we use the ;(semicolon)
*/

// //Named IIFE
(function serverCondition(){  //traditional function 
      return console.log( `server is running`)
})();

(userName =()=>(console.log("Aman maurya ")))();   //arrow function
( (useCase)=> (console.log(`IIFE is also used in arrow function: ${useCase}`)))("True")    //arrow function 




