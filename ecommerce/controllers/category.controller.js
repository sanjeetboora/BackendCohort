/**
 * - this would have all the controller logic for category
 * - whenever user will make a CRUD request, some method defined in this controller for
 * that request will be called
 */

const { response } = require('express');
const { category } = require('../models');
const db = require('../models');
const Category = db.category;

/**
 * create and save a new category
 */
exports.create = (req, res) => {
    /**
     * validate the request
     */
    console.log(req.body);
    if(!req.body.name){
        res.status(400).send({
            message: "Name of the category can't be empty"
        })
        return;
    }

    /**
     * creating the category object to be stored in db
     */

    const category = {
        name: req.body.name,
        description: req.body.description
    }

    /**
     * storing the category object in db
     */
    //Promise.then(resolved).catch(err)

    Category.create(category).then(response =>{
        console.log(`category name: [${response} got inserted in db]`);
        res.status(201).send(response);
    }).catch(err =>{
        console.log(`category name: [${err} got inserted in db]`);
        res.status(500).send({
            message: "Some internal error occurred while storing the category data!"
        })
    })
}

/**
 * Update an existing categoory
 */
 exports.update = (req, res) =>{
    /**
     * validate the request
     */
    if(!req.body.name){
        res.status(400).send({
            message: "Name of the category can't be empty"
        })
        return;
    }

    /**
     * creating the category object to be updated in db
     */

    const category = {
        name: req.body.name,
        description: req.body.description
    }
    const categoryId = req.params.id;
    Category.update(category,{
        where:{id:categoryId}
    }).then(response => {
        console.log(category, categoryId);
        res.status(200).send(response);

    }).catch(err =>{
        res.status(500).send({
            message: "Some internal error occurred while updating the category data!"
        })
    });
};

exports.delete = (req, res) =>{
    const categoryId = req.params.id;
    Category.destroy({
        where:{
            id:categoryId
        }
    }).then(response => {
        res.status(200).send(response);

    }).catch(err =>{
        res.status(500).send({
            message: "Some internal error occurred while deleting the category!"
        })
    });
}

/**
 * Get a category information based upon the category id
 */

 exports.findOne = (req, res) =>{
    const categoryId = req.params.id;
    Category.findByPk(categoryId).then(response =>{
        res.status(200).send(response);
    }).catch(err =>{
        res.status(500).send({
            message: "Some internal error occurred while fetching category based upon category id!"
        })
    })
}

exports.findAll = (req, res) =>{
    let categoryName = req.query.name;
    let promise;
    if(categoryName){
        promise = Category.findAll({
            where:{
                name: categoryName
            }
        })
    }
    else{
        promise = Category.findAll();
    }

    promise.then(response =>{
        res.status(200).send(response);
    }).catch(err =>{
        res.status(500).send({
            message: "Some internal error occurred while fetching all the categories"
        })
    })
}