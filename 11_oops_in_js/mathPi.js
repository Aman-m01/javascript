// console.log(Math.PI)
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI" )
console.log(descriptor)

// const myNewObj = Object.create(null)
const userData = {
    userName : "Aman",
    age : 18,
    isLoggedIn : true,
    activity : function(){
        console.log("User is active")
    }
}
console.log(userData)
console.log(Object.getOwnPropertyDescriptor(userData, "userName"))


// Object.defineProperty(userData, 'userName', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(userData, "userName"))


for (const [key , value] of Object.entries(userData)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);

    }
}