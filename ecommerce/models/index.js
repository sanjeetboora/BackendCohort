/** 
 * This file will be sued for :
 * - creating db connection with the help of Sequelize ORM
 * - export all the functionalities of models
 * - if somone imports this index.js then they can just import ./models
 * - if some wantes all this code of index.js file, then they can just use the module name db
*/
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.json');
const env = "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
    dbSettings.database,
    dbSettings.username,
    dbSettings.password,
    dbSettings.dialectInformation);

const db = {Sequelize, sequelize};
db.category = require('./category.model')(sequelize, Sequelize);
db.product = require('./product.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);

/**
 * Relationship between Role and User
 */
db.role.belongsToMany(db.user,{
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

module.exports = db;




