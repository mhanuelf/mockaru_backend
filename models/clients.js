var sql = require('./db.js');
const querys =require('../config/db.querys.js')

//Client object constructor
var Client = function(client){
   
};


Client.getClientById = function (clientId, result) {
    console.log("Consultando clientes por id:"+clientId);
    sql.query(querys.CLIENT_GET_CLIENT_BY_ID, [clientId], 
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


Client.getClientByComplain =function (description, result) {
    console.log("Consultando clientes por queja:"+description);
    sql.query(querys.CLIENT_LIST_CLIENT_BY_COMPLAIN, [description], 
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