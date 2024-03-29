var sql = require("./db.js");
const querys = require("../config/db.querys.js");

//Client object constructor
var Client = function(client) {};

Client.getClientById = function(clientId, result) {
  console.log("Consultando clientes por id:" + clientId);
  sql.query(querys.CLIENT_GET_CLIENT_BY_ID, [clientId], function(err, res) {
    if (err) {
      console.log("errormmmm: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Client.getClientByComplain = function(radicationType,description, result) {
  console.log("Consultando clientes por queja:" + radicationType+"-"+description);
  sql.query(querys.CLIENT_LIST_CLIENT_BY_COMPLAIN, [description,radicationType], function(
    err,
    res
  ) {
    if (err) {
      console.log("errormmmm: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Client.getClientFinantialInformationByClientId = function(clientId, result) {
  console.log(
    "Consultando informacion financiera de clientes por client Id:" + clientId
  );
  sql.query(
    querys.CLIENT_GET_FINNANTIAL_DATA_BY_CLIENT_ID,
    [clientId],
    function(err, res) {
      if (err) {
        console.log("errormmmm: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Client.getClientValue = function(value1, value2, value3, result) {
  console.log(
    "Consultando informacion de valor clientes:" +
      value1 +
      "-" +
      value2 +
      "-" +
      value3
  );
  sql.query(querys.CLIENT_MAGIC, [value1, value2, value3], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


Client.getClientComplainsByClientId = function(clientId, result) {
  console.log(
    "Consultando quejas por cliente :" +
      clientId
  );
  sql.query(querys.CLIENT_COMPLAIN_BY_CLIENT_ID, [clientId], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Client;
