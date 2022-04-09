const db = require("../models")


const checkDuplicateUsernameOrEmail = (req, res, next) =>{
    db.user.findOne({
        where:{
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Username already exists"
            })
            return;
        }
        //if user not present already, then validate for email also
        db.user.findOne({
            where:{
                email: req.body.email
            }
        }).then(user => {
            if(user){
                res.status(400).send({
                    message: "email already exists"
                })
                return;
            }
            next();
        })
    })
}

const checkRolesExists = (req, res, next) =>{
    if(req.body.roles){
        //iterate through roles provided by user

        console.log("inside check roles **********************");
        for(let i=0; i< req.body.roles.length; i++){
            if(!db.ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message: "Roles desn't exists" + req.body.roles[i]
                })
                return;
            }
        }
        next();
    }
}

const verifySignUp = {checkDuplicateUsernameOrEmail, checkRolesExists};
module.exports = verifySignUp;