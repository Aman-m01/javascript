const user1 = {
    userName: "Aman Maurya",
    age: 20,
    isLoggedIn: true,
    getUserDetails: function () {
        // console.log("got user details from the database ")
        console.log(`userName : ${this.userName}`)
    }
}
console.log(user.userName)
console.log(user.getUserDetails())


// // this.username is like a variable defined to store the value of username
function user(userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = new user("Aman", 9, true)   //it overwrites the value of userOne, userTwo ---> if we dont use new 
const userTwo = new user("Aman maurya1", 19, false)
console.log(userOne)
console.log(userTwo)
console.log(userOne.constructor)

