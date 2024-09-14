function myName(){
    return("Aman Maurya")
}
console.log(myName())


function addTwoNumber (number1 , number2){
   let  result = (number1+number2)
    return result
}
//  addTwoNumber(4,5)
let result = addTwoNumber(4,5)
console.log("Result: ",result)



// function addTwoNumber (number1 , number2){
//    return number1+number2
//  }
//  //  addTwoNumber(4,5)
//  let result = addTwoNumber(4,5)
//  console.log("Result: ",result)

function userLoginMessage (username = "RJ"){
       if(username === undefined){
        console.log("please enter a username")
    }
    return `${username} loggedIn`
}
 console.log(userLoginMessage("Aman Maurya"))

let ShowData = userLoginMessage("Aman")
console.log("userStatus: ",ShowData)


// function calculateCartPrice(...num1){   //... -> rest or spread operator 
//    return num1
// }
// console.log( calculateCartPrice(5))
// console.log(calculateCartPrice(200,394,343,4556,565))


let user ={
   userName : "Aman",
    rollNo : 10,
}
function showUserData(anyobject){
    console.log(`username is ${anyobject.userName} and rollNo is ${anyobject.rollNo}`)
}
showUserData(user)
showUserData({
    userName : "Aman Maurya",
    rollNo : 14
})


let arr = [200,343,4646,464633]
function returnThirdValue(anyarray){
    return  anyarray[2]
}
console.log(returnThirdValue(arr))