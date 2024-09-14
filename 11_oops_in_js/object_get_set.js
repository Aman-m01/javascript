const user = {
    _email : 'aman@gmail.com',
    _pass : "akm",


get email(){
return this._email.toUpperCase();
},
set email(value){
    this._email = value
}
}