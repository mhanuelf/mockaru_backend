const express = require('express');
var mysql = require('mysql');
var dashboardRouter = require('./routes/dashboard');

const app = express();
const PORT = 3000;


 
app.use('/dashboard', dashboardRouter);
app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/