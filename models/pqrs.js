var sql = require('./db.js');
const querys =require('../config/db.querys.js')
//Client object constructor
var Pqr = function (pqr) {

};


Pqr.getListPqrPerProduct = function (clientId, result) {
    console.log("Getting PQR per productType --");
    sql.query(querys.PQR_LIST_PQR_PER_PRODUCT_TYPE, clientId,
        function (err, res) {
            if (err) {
                //console.log("errormmmm: ", err);
                result(err, null);
            }
            else {
                // console.log("Respuesta................",res);
                result(null, (res));

            }
        });
};


Pqr.getListPqrPerClient = function (clientId, result) {
    console.log("Consultando PQR por  clientes");
    var sqlQuery = "select TIPO_RADICACION, p.CONTRATO, DESCRIPCION_CASO, DESCRIPCION, f.IMPORTE_ORIGINAL, f.INTERESES_PAGADOS," +
        " f.SALDO_PENDIENTE, cli.NOMBRES, cli.APELLIDOS, (0.3* ca.CANTIDAD_USO_MES) as valor_cliente " +
        " from INFO_PQR p , INFO_CATALOGO c , INFO_FINANCIERA f, INFO_CANAL ca, INFO_CLIENTE cli" +
        " where p.TIPO_PRODUCTO = c.TIPO_PRODUCTO and p.CONTRATO = f.CONTRATO " +
        "and cli.ID_INTERNO = f.ID_INTERNO and cli.NUMERO_IDENTIFICACION = ca.NUMERO_IDENTIFICACION";
    sql.query(sqlQuery, clientId,
        function (err, res) {
            if (err) {
                console.log("errormmmm: ", err);
                result(err, null);
            }
            else {
                result(null, res);

            }
        });
};


Pqr.getListPqrPerProductType = function (productTypeId, result) {
    console.log("Consultando PQR por  tipo de producto DB"+productTypeId);
    sql.query(querys.GET_PQR_BY_PRODUCT_TYPE, [productTypeId],
        function (err, res) {
            if (err) {
                console.log("errormmmm: ", err);
                result(err, null);
            }
            else {
                result(null, res);

            }
        });
};




module.exports = Pqr;