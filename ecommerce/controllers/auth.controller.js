const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require('../config/auth.config');
const db = require("../models");

const Op = db.Sequelize.Op;
const User = db.user;
const Role = db.role;

//register or sign-up

exports.signup = (req, res) =>{
    const userObj = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    };
    User.create(userObj).then(user => {
        console.log("user created");
        if(req.body.roles){
            Role.findAll({
                where: {
                    name:{
                        [Op.or]: req.body.roles
                    }
                }
            }).then(roles =>{
                user.setRoles(roles).then(()=>{
                    res.send({message: "user registered successfully!"});
                })
            })
        }else{
            //default role => 1 - customer
            user.setRoles(db.ROLES[0]).then(resp =>{
                res.status(201).send({message: "user registered successfully!"});
            })
        }
    }).catch(err =>{
        res.status(500).send({message: err.message});
    });
}


//sign-in

exports.signin = (req, res) =>{
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then(user =>{
        if(!user){
            return res.status(404).send({message:"User not found"});
        }

        var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if(!isValidPassword){
            return res.status(401).send({
                message:"Invalid Password"
            })
        }

        var token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 86400 //24 hours
        })
//[{"1", "customer"}, {"2", "admin"}] => ["ROLE_CUSTOMER", "ROLE_ADMIN"] <= authorities
        var authorities = [];
        user.getRoles().then(roles =>{
            for(let i =0; i<roles.length; i++){
                authorities.push("ROLE_"+roles[i].name.toUpperCase());
            }

            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            })
        })

    }).catch(err =>{
        res.status(500).send({message: err.message});
    })
}