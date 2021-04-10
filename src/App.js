var express = require('express');
var app = express();
const cors = require('cors')
var dbConfig = require('./Schema.js');
app.use(cors())


var memberRoute = require('./routes/memberRoute.js');
app.use(memberRoute);

//PORT which listens
app.listen(3001);