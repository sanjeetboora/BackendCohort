const expressJS = require('express');
const fs = require('fs');
const path = require('path');
const expressApp = expressJS();

expressApp.use(function(req, res, next){
    let filePath = path.join(__dirname, req.url);
    console.log(filePath);
    console.log(req.url);
    fs.stat(filePath, function(err, fileInfo){
        if(err){
            next();
            return;
        }
        if(fileInfo.isFile()){
            res.sendFile(filePath);
        }
        else{
            next();
        }
    });
});

expressApp.listen(8080, function(){
    console.log("my server is running at port 8080");
});