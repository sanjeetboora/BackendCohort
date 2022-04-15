const db = require('../models');

/**
 * create and save a new cart
 */

exports.create = (req, res) =>{
   const cartObj = {
    userId : req.userId //it will be provided by the middleware
   }

   db.cart.create(cartObj).then(cart =>{
    res.status(201).send(cart);
   }).catch(err =>{
       res.status(500).send({
           message: "Some internal server error occurred"
       })
   })
}