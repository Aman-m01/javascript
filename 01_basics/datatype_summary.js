/* js is a dynamically typed language. 
 primitive data type -- these data types are call by value 
 7-types : string, number, boolean , null , undefined , symbol, bigint 
referrence data type(non-primitive) : Array , objects , function    */


// //primitive data type

// let marks =100
// let name="Aman"
// let isPass=true
// const outsideTemp=null
// let userDetails;
// const bigNumber =2324545n;

// const ID = Symbol('1234')
// // const anotherID=Symbol('1234')
// // console.log(ID===anotherID)

// console.log(typeof marks)
// console.log(typeof name)
// console.log(typeof isPass)
// console.log(typeof outsideTemp)
// console.log(typeof userDetails)
// console.log(typeof ID)
// console.log(typeof bigNumber)


// // non-primitive datatype 
// const arrName=["Aman","Anshu","abhishek"]
//  let myDetail={ 
// name: "aman",
// branch: "cse",
// roll_no: 10
// }

// let myFunction=function(){
//     console.log("Hello Aman")
// }


// console.log(typeof arrName)
// console.log(typeof myDetail)
// console.log(typeof myFunction)

/* there are two types of memory 
 stack(primitive) , heap(non-primitive)
 in satck memory we work on the copy of the data whether in heap we works on the referrence of the data.
 */

let myName = "Aman kumar "
let anotherName=myName
 anotherName="Arpit Maurya"
 console.log(myName)
 console.log(anotherName)

let user={
    email:"aman@123",
    upi:"12.upi"
}

let user1=user
user1.name="abhishek"
console.log(user.name)
console.log(user1.name)



