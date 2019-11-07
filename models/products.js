var sql = require('./db.js');

//Client object constructor
var Product = function (productos) {

};


Product.getProductById = function (productId, result) {
    console.log("Consultando productos por id" + productId);
     var sqlQuery = "select p.TIPO_PRODUCTO,c.DESCRIPCION,TIPO_RADICACION, count(1) as CANTIDAD from INFO_PQR p , INFO_CATALOGO c where p.TIPO_PRODUCTO = c.TIPO_PRODUCTO and p.TIPO_PRODUCTO = '"+productId+"' group by TIPO_RADICACION, TIPO_PRODUCTO, c.DESCRIPCION";
    sql.query(sqlQuery, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};




module.exports = Product;