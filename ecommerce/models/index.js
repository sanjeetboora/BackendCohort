/** 
 * This file will be sued for :
 * - creating db connection with the help of Sequelize ORM
 * - export all the functionalities of models
 * - if somone imports this index.js then they can just import ./models
 * - if some wantes all this code of index.js file, then they can just use the module name db
*/
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.json');
const env = process.env.NODE_ENV || "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
    dbSettings.database,
    dbSettings.username,
    dbSettings.password,
    dbSettings.dialectInformation);

const db = { Sequelize, sequelize };
db.category = require('./category.model')(sequelize, Sequelize);
db.product = require('./product.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.cart = require('./cart.model')(sequelize, Sequelize);

/**
 * Relationship between Role and User
 */
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["customer", "admin"];


/**
 * Relationship between Cart and User  : 1 user has many carts
 */
db.user.hasMany(db.cart);

/**
 * Relationship between Cart and Products : Many-to-many
 */

db.product.belongsToMany(db.cart, {
    through: "cart_products",
    foreignKey: "productId",
    otherKey: "cartId"
});

db.cart.belongsToMany(db.product, {
    through: "cart_products",
    foreignKey: "cartId",
    otherKey: "productId"
});

module.exports = db;




