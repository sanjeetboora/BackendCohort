const express = require('express');
const app = express();
const serverConfig = require('./config/server.config.js');
const db = require("./models"); //it will automatically get models/index.js

var categoriesData = [
    {name: "Electronics", 
    description: "This category contains electrical appliances"},
    {name: "Vegetables", 
    description: "This category contains vegetables"},
]

db.category.bulkCreate(categoriesData).then(() =>{
    console.log("category table is initialized with category data");
}).catch((err) =>{
    console.log("Error in initializing categories table", err);
})

db.sequelize.sync({force:true}).then(() =>{
    console.log("models/tables are dropped and recreated");
})

app.listen(serverConfig.PORT, () => {
    console.log("my server is working");
});




//let meet at 10:20pm