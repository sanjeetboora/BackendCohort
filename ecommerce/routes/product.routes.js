
const productController = require('../controllers/product.controller');
const {requestValidator} = require('../middlewares');
module.exports = function(app){
    //Route for POST request to create the product
    app.post("/ecomm/api/v1/products",[requestValidator.validateProductRequest] ,productController.create)

    //Route for PUT request to update the product
    app.put("/ecomm/api/v1/products/:id", [requestValidator.validateProductRequest], productController.update)

    //Route for DELETE request to delete the product
    app.delete("/ecomm/api/v1/products/:id", productController.delete)

    //Route for GET request to get the product based on the id
    app.get("/ecomm/api/v1/products/:id", productController.findOne)

    //Route for GET request to get the all the products
    app.get("/ecomm/api/v1/products", productController.findAll)
}