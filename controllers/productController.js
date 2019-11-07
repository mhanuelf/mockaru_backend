var Product = require("../models/products");

// Display detail data for a specific Product.
exports.product_detail = function(req, res) {
  Product.getProductById(req.params.productId, function(err, product) {
    console.log("controller product by id" + req.params.productId);
    if (err) res.send(err);
    console.log("res", product);
    let data = {
      name: "",
      quejas: 0,
      peticiones: 0,
      reclamos: 0
    };
    for (var k in product) {
      data.name = product[k].DESCRIPCION;
      if (product[k].TIPO_RADICACION == "P")
        data.peticiones = product[k].CANTIDAD;
      if (product[k].TIPO_RADICACION == "Q") data.quejas = product[k].CANTIDAD;
      if (product[k].TIPO_RADICACION == "R")
        data.reclamos = product[k].CANTIDAD;
    }

    res.send(data);
  });
};

function table(respuesta) {
  let respuesta_front = [];
  for (var k in respuesta) {
    if (k == 0) respuesta_front.push(Object.keys(respuesta[k]));
    respuesta_front.push(Object.values(respuesta[k]));
  }
  return respuesta_front;
}
