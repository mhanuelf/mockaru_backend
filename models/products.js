var sql = require("./db.js");
const QUERYS = require("../config/db.querys.js");

//Client object constructor
var Product = function(productos) {};

Product.getProductById = function(productId, result) {
  console.log("Consultando productos por id" + productId);
  sql.query(QUERYS.PRODUCT_GET_PRODUCT_BY_ID, [productId], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Product;
