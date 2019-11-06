const express = require('express');
var mysql = require('mysql');
var cors = require('cors')
var dashboardRouter = require('./routes/dashboard');
var bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/dashboard', dashboardRouter);
app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

