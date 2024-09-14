function setUserName(userName){
    //complex db call
    this.userName = userName
}

function createUser(userName , email , password){
    setUserName.call(this, userName);
    this.email= email;
    this.password = password;
}

const user1 = new createUser("Aman", "aman@gmail.com" , "1233")
console.log(user1)