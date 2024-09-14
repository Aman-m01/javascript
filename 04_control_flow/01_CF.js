// //if 
// let age = 22
// if (age >= 18) {
//     console.log("you are eligible for vote")
// }

// //if-else
const age=12
if (age >= 18) {
 console.log("eligible for voting")   
} else {
    console.log("not eligible for voting")   
    
}

// // shorthand 
let balance = 1500
if(balance<=2000) (console.log("legal"));

const temprature = 42
if(temprature<=50){
    console.log("less than 50")
}else{
    console.log("greater than 50")
}



// // if-else if-else
let marks =30
if(marks >= 90){
    console.log("Grade A")
}
else if(marks >=75){
    console.log("Grade B")
}
else if(marks >= 60){
   console.log("Grade C")
}
else{
    console.log("Grade D")

}


const userLoggedIn = true
const debitCard = true 
const userLoggedInGoogle = true
const userLoggedIntwitter = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy Courses")
}

if(userLoggedInGoogle || userLoggedIntwitter){
    console.log("user logged in")
}






