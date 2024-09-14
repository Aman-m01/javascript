class user{
    constructor(email , password){
        this.email = email
        this.password = password
    
    }
     get password(){
        return this._password.toUpperCase()
     }
     set password(value){
       this._password = value 
     }

}
const Aman = new user("aman@gmail.com", "rj" )
console.log(Aman.password);