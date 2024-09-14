function user(email , password){
    this.email = email
    this.password = password
    
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this.email = value 
        }
    })

    
}