const db = require("../models");
const checkDuplicateUsernameOrEmail = (req, res, next) => {
    db.user.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username already exists"
            })
            return;
        }
        //if username not present already, then validate for email also
        db.user.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "email already exists"
                })
                return;
            }
            next();
        })
    })
}

const checkRolesExists = async (req, res, next) => {
    if (req.body.roles) {
        //iterate through roles provided by user
        for (let i = 0; i < req.body.roles.length; i++) {
            let roleIncluded = await db.ROLES.includes(req.body.roles[i]);
            if (!roleIncluded) {
                res.status(400).send({
                    message: "Roles desn't exists" + req.body.roles[i]
                })
                return;
            }
        }
    }
    next();
}

const verifySignUp = { checkDuplicateUsernameOrEmail, checkRolesExists };
module.exports = verifySignUp;