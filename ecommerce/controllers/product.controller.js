/**
 * This file will have all the controller logic for produc
 * all the crud request coming for product would be execulting some method of this file.
 */

const db = require('../models');
 console.log(db);
 const Product = db.product;
 
 /**
  * create and save a new produ t
  */
 exports.create = (req, res) => {
     /**
      * creating the product object to be stored in db
      */
 
     const product = {
         name: req.body.name,
         description: req.body.description,
         price: req.body.price,
         categoryId: req.body.categoryId
     }
 
     /**
      * storing the product object in db
      */
     //Promise.then(resolved).catch(err)
     console.log("*****we are here in product controller for create****",Product);
     Product.create(product).then(response =>{
         console.log(`product: [${response} got inserted in db]`);
         res.status(201).send(response);
     }).catch(err =>{
         console.log(`product: [${err} not inserted in db]`);
         res.status(500).send({
             message: "Some internal error occurred while storing the product data!"
         })
     })
 }
 
 /**
  * Update an existing product
  */
  exports.update = (req, res) =>{
     /**
      * creating the product object to be updated in db
      */
 
     const product = {
         name: req.body.name,
         description: req.body.description,
         price: req.body.price
     }
     const productId = req.params.id;
     Product.update(product,{
         where:{id:productId}
     }).then(response => {
         console.log(product, productId);
         res.status(200).send(response);
 
     }).catch(err =>{
         res.status(500).send({
             message: "Some internal error occurred while updating the product data!"
         })
     });
 };
 
 exports.delete = (req, res) =>{
     const productId = req.params.id;
     Product.destroy({
         where:{
             id:productId
         },
         returning: true
     }).then(response => {
         res.sendStatus(200).send(response);
 
     }).catch(err =>{
         res.sendStatus(500).send({
             message: "Some internal error occurred while deleting the product!"
         })
     });
 }
 
 /**
  * Get a product information based upon the product id
  */
 
  exports.findOne = (req, res) =>{
     const productId = req.params.id;
     Product.findByPk(productId).then(response =>{
         res.status(200).send(response);
     }).catch(err =>{
         res.status(500).send({
             message: "Some internal error occurred while fetching product based upon product id!"
         })
     })
 }
 
 exports.findAll = (req, res) =>{
     let productName = req.query.name;
     let promise;
     if(productName){
         promise = Product.findAll({
             where:{
                 name: productName
             }
         })
     }
     else{
         promise = Product.findAll();
     }
 
     promise.then(response =>{
         res.status(200).send(response);
     }).catch(err =>{
         res.status(500).send({
             message: "Some internal error occurred while fetching all the products"
         })
     })
 }

 exports.getProductsUnderCategory = (req, res) => {
     const categoryID = req.params.categoryId;
     Product.findAll({
         where: {
             categoryId: categoryID
         }
     }).then(response =>{
         res.status(200).send(response);
     }).catch(err =>{
        res.status(500).send({
            message: "Some internal error occurred while fetching all the products based upon the category id"
        })
     })
 }