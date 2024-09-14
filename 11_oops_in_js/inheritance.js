class user{
    constructor (userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`UserName is: ${this.userName}`)
    }
}


class teacher extends user{
    constructor (userName, email , password){
        super(userName)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`Course added by ${this.userName}`)
    }
}

const user1 = new teacher("Aman", "aman@gmail.com", "123")
user1.addCourse()

const user2 = new user("Aman Maurya")
user2.logMe()

console.log(user1 instanceof teacher)
// console.log(teacher instanceof user)

