const expressJS = require('express');
const expressApp = expressJS();

expressApp.get('/', function (req, res) {
    res.send('Hello World');
});
expressApp.get('/name', function (req, res) {
    res.send("Http server response: Arnab");
});
expressApp.get('/company', function (req, res) {
    res.send("Http server response: MNC");
});
expressApp.listen(8080);
// expressApp.listen(8080, function(){
//     console.log("my server is running at port 8080");
// });