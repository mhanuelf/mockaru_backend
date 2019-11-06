var sql = require('./db.js');

//Client object constructor
var Client = function(client){
    this.client = client.client;
    this.client = client.status;
    this.created_at = new Date();
};


Client.getClientById = function (clientId, result) {
    console.log("Consultando clientes");
    sql.query("Select DESCRIPCION ,APLICATIVO  from INFO_CATALOGO where ID_PRODUCTO = 1", clientId, function (err, res) {             
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