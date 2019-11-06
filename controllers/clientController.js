var Client = require('../models/clients');

// Display list of all Authors.
exports.client_list = function(req, res) {
  

    
    res.send('UNDER CONSTRUCTION: Client list');

};

// Display detail page for a specific Author.
exports.client_detail = function(req, res) {
    Client.getClientById(function(err, client) {

        console.log('controller')
        if (err)
          res.send(err);
          console.log('res', client);
        res.send(client);
      });
  //  res.send('UNDER CONSTRUCTION: CLIENT detail: ' + req.params.id);

};

// Display Client create form on GET.
exports.client_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};



