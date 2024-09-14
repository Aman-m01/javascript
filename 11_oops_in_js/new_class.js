// //ES6

// class user {
//     constructor(userName, email, password) {
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }
//    .encryptPassword() {
//         return `${this.password}abc`
//     }
//     userData() {
//         return `${this.userName.toUpperCase()}`
//     }
// }
// const user1 = new user("Aman", "aman@gmail.com", 5235)
// console.log(user1.encryptPassword())
// console.log(user1.userData())


// //behind the scene
function user(userName , email, password){
    this.userName = userName
    this.email = email
    this.password = password
}
user.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

user.prototype.userData = function(){
    return `${this.userName.toUpperCase()}`
}

const user2 = new user("Aman", "aman@gmail.com", "1212")
console.log(user2.encryptPassword())
console.log(user2.userData())