/**
 * Category Schema
 * 1. id
 * 2. name
 * 3. description
 *
 */

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'categories'
    });
    return Category;
}