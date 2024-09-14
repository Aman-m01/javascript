// objects literals 
// Object.create -- it is the another methods to create an object, here singleton is used.


const my_Symbol = Symbol("key")
const user = {
      name : "Aman",
      full_name: "Aman Kumar",
      Branch : "CSE",
      [my_Symbol]: "key", 
      Roll_no : 10,
}
console.log(user.name)
console.log(user["name"])

// console.log( user[my_Symbol]) // it is defined as the symbol.

user.name = "Aman Maurya "
console.log(user)

// Object.freeze(user) // now , we cannot changed the value 

user.greeting = function (){
    console.log("Hello Aman")
}

console.log(user.greeting) //give function referrence -- [function(anonymous)]

user.greeting2 = function(){
    console.log(`hello Aman, ${this.name}`)
}

console.log(user.greeting())
console.log(user.greeting2())
