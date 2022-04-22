
const categoryController = require('../controllers/category.controller');
const { requestValidator, authJwt } = require('../middlewares');
module.exports = function (app) {
    //Route for POST request to create the category
    app.post("/ecomm/api/v1/categories", [requestValidator.validateCategoryRequest, authJwt.verifyToken, authJwt.isAdmin], categoryController.create)

    //Route for PUT request to update the category
    app.put("/ecomm/api/v1/categories/:id", [requestValidator.validateCategoryRequest, authJwt.verifyToken, authJwt.isAdmin], categoryController.update)

    //Route for DELETE request to delete the category
    app.delete("/ecomm/api/v1/categories/:id", [authJwt.verifyToken, authJwt.isAdmin], categoryController.delete)

    //Route for GET request to get the category based on the id
    app.get("/ecomm/api/v1/categories/:id", categoryController.findOne)

    //Route for GET request to get the all the categories
    app.get("/ecomm/api/v1/categories", categoryController.findAll)
}

