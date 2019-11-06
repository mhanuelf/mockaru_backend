var Pqr = require('../models/pqrs');


// Display detail page for a specific Client.
exports.pqr_list = function (req, result) {
  Pqr.getListPqrPerProduct(function (err, pqrList) {
    console.log('controller pqr per product..........')
    if (err)
      result.send(err);
    // console.log('res', pqrList);
    result.send(pie(pqrList));
  });


};


exports.pqr_per_client = function (req, result) {

  Pqr.getListPqrPerClient(function (err, pqrList) {
    console.log("controller Pqr per client list");
    if (err)
      result.send(err);
    // console.log('res', pqrList);
    result.send(table(pqrList));
  });

};

function table(respuesta) {
  let respuesta_front = [];
  for (var k in respuesta) {
    if (k == 0)
      respuesta_front.push(Object.keys(respuesta[k]));
    respuesta_front.push(Object.values(respuesta[k]));

  }
  return (respuesta_front);
}

function pie(respuesta) {
  let respuesta_front = [];
  for (var k in respuesta) {
  
    respuesta_front.push(Object.values(respuesta[k]));

  }
  return (respuesta_front);
}

