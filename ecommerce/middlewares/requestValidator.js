const { category } = require("../models");

const validateCategoryRequest = (req, res, next) =>{
    /**
     * validate the request for name
     */
     if(!req.body.name){
         res.status(400).send({
             message: "Name of the category can't be empty"
         })
         return;
     }
     next();
}

const validateProductRequest = (req, res, next) =>{
    /**
     * validate the request body
     */
    if(!req.body.name || !req.body.price){
        res.status(400).send({
            message: "Name or price of the product can't be empty"
        })
        return;
    };

    if(req.body.categoryId){ //if category id provided
        //validate if that is a valid categoryId
        category.findByPk(req.body.categoryId).then(response =>{
            if(!response){
                res.status(400).send({
                    message: `CategoryId passed is not valid : ${req.body.categoryId}`
                })
                return;
            }
        })
    }else{//if category id is not provided
        res.status(400).send({
            message: "CategoryId of a product is not available!"
        })
        return;
    }   
    
    if(!req.body.price || req.body.price <= 0){
        res.status(400).send({
            message: "Price doesn't seems to be in place!"
        })
        return;
    }

    next();
}

const validateCategoryInRequestParams=(req, res, next) => {
    const categoryId = req.params.categoryId;

    if(categoryId){ //user have provided some category id
        //validate category id
        category.findByPk(categoryId).then(response =>{
            if(!response){ //category id is not valid
                res.status(400).send({
                    message: `CategoryId passed is not valid : ${categoryId}`
                })
                return;
            }
            else{ //category id is valid
                next();
            }     
        }).catch(err => {
            res.status(500).send({
                message: 'Some inernal error occurred'
            })
        })
    }else{//user haven't provided some category id
        res.status(400).send({
            message: `CategoryId is not available`
        })
        return;
    }

}

module.exports = {validateCategoryRequest, validateProductRequest, validateCategoryInRequestParams};
