const user = {
    name : "Aman",
    price : 999 ,
    welcomeMessage : function(){
        console.log(`${this.name}, welcome to the website`)
    //   console.log(this)
    }
}

user.welcomeMessage()
user.name = "Rohan"
user.welcomeMessage()

  console.log(this)  //--> {}



// function printThis (){
//     let name = "Aman"
//     // console.log(this.name)
// }
// printThis()

//  chai = function(){
//     let username = "Aman"
//     console.log(this.username);

// }


//Arrow functions 
//  chai = () => function(){
//     let username = "Aman"
//     console.log(this.username);

// }
// chai() 


// // basic arrow function 
//  addTwo =  (num1 , num2 ) => {
//    return num1 + num2 
// }
// console.log(addTwo(5,7))


// implicit return 
//  addTwo =  (num1 , num2 ) => num1 + num2 
//  addTwo =  (num1 , num2 ) => (num1 + num2 )
// console.log(addTwo(5,9))


addNum = (num1, num2) => {
    return num1 + num2
}
console.log(addNum(2, 4))

// //when we write the arrow function and using the (), then we don't need to write the return function.
//   addTwoNum = (num1,num2) => (num1+num2)
// console.log( addTwoNum(6,9))


// // for objects 
obj = () => ({
    name: "Aman",
    rollNo: 10
})
console.log(obj())


// //traditional function 
function addNum(num1, num2) {
    return num1 + num2
}
console.log(addNum(3, 4))


//Arrow function method 
//m-1 ***
addNum = (num1, num2) => (console.log(num1 + num2))
addNum(6, 7)

// m-2
addNum1 = (number1, number2) => {
    return number1 + number2
}
addNum1(4, 4)



name = () => {
    console.log("Aman Maurya")
}
name()
