//get all users data
//add new user
//delete a user

const expressJS = require('express');
const bodyParser = require('body-parser');
const expressApp = expressJS();
//database
let users = [
    {"id" : "1", "name" : "Dipankar", "class":"7th"},
    {"id" : "2", "name" : "Kiran", "class":"8th"}
];

expressApp.use(bodyParser.urlencoded({extended:false}));
expressApp.use(bodyParser.json());
//get data of all users
expressApp.get('/users', (req, res) =>{
    res.json(users).status(200);
})
//post to add new user
expressApp.post('/user', (req, res) =>{
    const newUser = req.body;
    users.push(newUser);//add new user
    res.send("user is added in database").status(200);
})

//delete a user
expressApp.delete('/user/:id', (req, res) =>{
    const userID = req.params.id;
    users = users.filter(user =>{
        if(user.id != userID){
            return true;
        }
        return false;
    });
    res.send("iser is deleted successfully").status(200);
})

expressApp.listen(8080, function(){
    console.log("my server is running at port 8080");
});