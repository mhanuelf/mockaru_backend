var sql = require("./db.js");
const querys = require("../config/db.querys.js");

//Client object constructor
var Channel = function(client) {};

Channel.getChannelByClientId = function(clientId, result) {
  console.log("Consultando canales por identificacion de cliente:" + clientId);
  sql.query(querys.CHANNEL_GET_CHANNEL_BY_CLIENT_ID, [clientId], function(
    err,
    res
  ) {
    if (err) {
      console.log("errormmmm: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Channel;
