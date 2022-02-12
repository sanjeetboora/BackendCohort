//Javascript Code to create a login mechanism using object
const user = {
    name: "Vishwas",
    email: "vishwas@gmail.com",
    password: "LearnJavascript",
    login: function(userEmail, userPassword){
        if(this.email === userEmail && this.password === userPassword){
            console.log("successfully logged in");
        }
        else{
            console.log("try again");
        }
    }
}

user.login("vishnu@gmail.com", "vishnuPassword");
user.login("vishwas@gmail.com", "LearnJavascript");