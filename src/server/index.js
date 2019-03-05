const express = require('express');
const app = express();
var router = require('./router/router.js')
var bodyParser = require("body-parser");


app.use('/',router);

app.listen(3000,function () {
    console.log('success at port:3000');
})