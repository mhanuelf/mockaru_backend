var Client = require("../models/clients");

// Display list of all clients.
exports.client_list = function(req, res) {
  res.send("UNDER CONSTRUCTION: Client list");
};

// Display detail page for a specific Client.
exports.client_detail = function(req, res) {
  Client.getClientById(req.params.id, function(err, client) {
    console.log("controller client by id" + req.params.id);
    if (err) res.send(err);
    res.send(client[0]);
  });
};

exports.list_clients_by_complain = function(req, res) {
  Client.getClientByComplain(req.params.radicationType,req.params.complain, function(err, client) {
    console.log("controller client by complain " + req.params.complain+"-"+req.params.radicationType);
    if (err) res.send(err);
    res.send(client);
  });
};

exports.list_client_finantial_information_by_clientid = function(req, res) {
  Client.getClientFinantialInformationByClientId(req.params.clientId, function(
    err,
    client
  ) {
    console.log(
      "controller client finantial information by clientId " +
        req.params.clientId
    );
    if (err) res.send(err);
    res.send(client);
  });
};

// Display Client create form on GET.
exports.client_value = function(req, res) {
  Client.getClientValue(
    req.params.value1,
    req.params.value2,
    req.params.value3,
    function(err, client) {
      console.log(
        "controller client finantial information by ....magic " +
          req.params.value1+"-"+req.params.value2+"-"+req.params.value3
      );
      if (err) res.send(err);
      res.send(client);
    }
  );
};

// Display Client create form on GET.
exports.client_complain_by_client_id = function(req, res) {
  Client.getClientComplainsByClientId(
    req.params.clientId,
    function(err, client) {
      console.log(
        "controller client complains by clientId" +
          req.params.clientId
      );
      if (err) res.send(err);
      res.send(client);
    }
  );
};
