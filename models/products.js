var sql = require('./db.js');

//Client object constructor
var Product = function (productos) {

};


Product.getProductById = function (productId, result) {
    console.log("Consultando productos por id" + productId);
    var sqlQuery = "select TIPO_RADICACION, TIPO_PRODUCTO, count(1) as cantidad from INFO_PQR where " +
        "TIPO_PRODUCTO = '" + productId +"' group by TIPO_RADICACION, TIPO_PRODUCTO";
    sql.query(sqlQuery, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("Respuesta", res);
            result(null, res);

        }
    });
};




module.exports = Product;