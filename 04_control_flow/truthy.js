// truthy and falsy value 
const userEmail = "ak@gmail.com"
// const userEmail = "aman@gmail.com"

if (userEmail) {
    console.log("Got user Email")
}
else {
    console.log("don't get user email")
}


if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty")
}


// //Nullish Coalescing operator(??): null undefined 
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = null ?? 10 ?? 20
console.log(val1)


// //ternary operator 
// //condition ? true : false 
const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80")

