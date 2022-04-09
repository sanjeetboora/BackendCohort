const jwt =require("jsonwebtoken");
const config = require('../config/auth.config');
const { user } = require("../models");


//verify the token

verifyToken = (req, res, next) =>{
    let token = req.headers["x-access-token"];
    if(!token){
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) =>{
        if(err){
            return res.status(401).send({
                message:'Unauthorized'
            });
        }

        req.userId = decoded.id;
        next();
    });
};

isAdmin = (req, res, next) =>{
    user.findByPK(req.userId).then(user => {
        user.getRoles().then(roles =>{
            for(let i=0; i<roles.length; i++){
                if(roles[i] === "admin"){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "require admin role"
            });
            return;
        });
    });
}

const authJwt = { verifyToken, isAdmin};
module.exports = authJwt;