const expressJS = require('express');
const expressApp = expressJS();

expressApp.get('/', function (req, res) {
    res.send('Hello World');
});

// expressApp.get(/^\/students\/(\d+)$/, function (req, res) {
//     console.log(req.params);
//     res.send('ExpressJs backed http endpoint for student id ' + req.params[0]);
// });

expressApp.get(/^\/students\/(\d+)\/[a-z]+$/, function (req, res) {
    console.log(req.params);
    res.send('ExpressJs backed http endpoint for student id ' + req.params[0]);
});
// expressApp.get('/students/:studentId', function (req, res) {
//     res.send('ExpressJs backed http endpoint for student id ' + req.params.studentId);
// });
expressApp.get('/students/:studentId/:region', function (req, res) {
    console.log(req);
    console.log(req.params);
    res.send('ExpressJs backed http endpoint for student id ' + req.params.studentId + req.params.region);
});
// expressApp.get('/students/2', function (req, res) {
//     res.send('ExpressJs backed http endpoint for student id 2');
// });

expressApp.listen(8080, function(){
    console.log("my server is running at port 8080");
});