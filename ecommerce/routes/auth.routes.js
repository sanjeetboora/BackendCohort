const controller = require('../controllers/auth.controller');
const { verifySignUp } = require('../middlewares');
module.exports = function (app) {
    app.post("/ecomm/api/v1/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExists], controller.signup);
    app.post("/ecomm/api/v1/auth/signin", controller.signin);
}