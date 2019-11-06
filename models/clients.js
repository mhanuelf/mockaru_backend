var sql = require('./db.js');

//Client object constructor
var Client = function(client){
   
};


Client.getClientById = function (clientId, result) {
    console.log("Consultando clientes");
    var sqlQuery="Select DESCRIPCION ,APLICATIVO  from INFO_CATALOGO where ID_PRODUCTO = 1";
    sql.query(sqlQuery, clientId, 
    function (err, res) {             
            if(err) {
                console.log("errormmmm: ", err);
                result(err, null);
            }
            else{
                console.log("Respuesta",res);
                result(null, res);
          
            }
        });   
};




module.exports= Client;