// // nums and math js 
// const score = 400
// console.log(score)   // output=> 400

// const balance = new Number(100)
// console.log(balance)   //output=> [number: 100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(typeof balance)


// const value=42.889
// console.log(value.toFixed(2))  //output=>42.89
// console.log(value.toPrecision(2))  //output=>43

// const hundreds =1000000
// console.log(hundreds.toLocaleString())  
// console.log(hundreds.toLocaleString('en-IN'))  //indian standard 
// we can check min-value ,maxx-value and other methods in console 


//************************MATH*****************/
// console.log(Math)
// console.log(Math.abs(-5)) // absolut value -- output=>5
// console.log(Math.round(5.66)) // roundof --  output=>6
// console.log(Math.ceil(4.6)) // two methods are used-- ceil & floor
// console.log(Math.floor(4.6)) 

// console.log(Math.sqrt(16)) // output=>4
// console.log(Math.min(4.6,45,66,443,1.3,3)) // min value=>1.3
// console.log(Math.max(4.6,34,4345.4,54656,55665654,34))

// console.log(Math.random())  //its gives value b/w 0 to 1 

console.log((Math.random()*10 )+ 1) 
console.log((Math.floor(Math.random()*10 )) + 1) 


// //trick  
const min=20
const max=30

console.log(Math.floor(Math.random()*(max - min + 1))+ min)