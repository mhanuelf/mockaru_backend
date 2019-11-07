var Channel = require("../models/channels");

exports.list_channels_by_client_id = function(req, res) {
  Channel.getChannelByClientId(req.params.clientId, function(err, client) {
    console.log("controller channel by clientId " + req.params.clientId);
    if (err) res.send(err);
    res.send(client);
  });
};
