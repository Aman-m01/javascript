// //dates in js 
let myDate = new Date()
console.log(myDate.toString()) 
console.log(myDate.toDateString()) 
console.log(myDate.toLocaleString()) 
console.log(myDate.toTimeString()) 
console.log(myDate.toJSON()) 

// console.log(typeof myDate); //object 

// let createNewDate1 = new Date(2024,2,11)
// let createNewDate = new Date(2024,2,11 ,9,27)
// console.log(createNewDate.toLocaleString())
// console.log(createNewDate.toDateString())

// let createDate = new Date("2024-03-11")

let createDate = new Date("03-11-2024")
// // console.log(createDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(createDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)


// for customization 
newDate.toLocaleString('default',{
    weekday:"long",
   
})





