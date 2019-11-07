var cluster = require("cluster");

if (cluster.isMaster) {
  // Count the machine's CPUs
  var cpuCount = require("os").cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Code to run if we're in a worker process
} else {
  const express = require("express");
  var mysql = require("mysql");
  var cors = require("cors");
  var dashboardRouter = require("./routes/dashboard");
  var bodyParser = require("body-parser");
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/dashboard", dashboardRouter);
  app.listen(PORT, () =>
    console.log(`Express server currently running on port ${PORT}`)
  );
}
