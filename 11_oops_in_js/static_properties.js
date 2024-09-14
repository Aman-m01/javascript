class user{
   constructor(userName){
    this.userName = userName
   }
   logMe(){
    console.log(`username Is: ${this.userName}`)
   }
static createId(){
    return `123`
}
} 

const user1 = new user("Aman")
// console.log(user1.createId())

class Teacher extends user{
    constructor(userName, email){
       super(userName)
       this.email = email;
       
    }
}
const user3 = new Teacher("Aman", "aman@gmail.com")
user3.logMe()