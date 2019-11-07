var express = require("express");
var router = express.Router();

var client_controller = require("../controllers/clientController");
var pqr_controller = require("../controllers/pqrController");
var product_controller = require("../controllers/productController");
var channel_controller = require("../controllers/channelController");

// GET request for one Author.
router.get("/client/:id", client_controller.client_detail);

//GET PQR per product type
router.get("/pqr/producttype/", pqr_controller.pqr_list);

//GET PQR per client
router.get("/pqr/client", pqr_controller.pqr_per_client);

//GET Product by id
router.get("/product/:productId", product_controller.product_detail);

//GET PQR by productType
router.get("/pqr/:productTypeId", pqr_controller.pqr_per_product_type);

//GET CLIENTS BY COMPLAIN
router.get(
  "/client/complain/:complain",
  client_controller.list_clients_by_complain
);

//GET CLIENTS BY COMPLAIN
router.get(
  "/client/finantial/:clientId",
  client_controller.list_client_finantial_information_by_clientid
);

//GET CHANNELS BY CLIENT ID
router.get("/channel/:clientId", channel_controller.list_channels_by_client_id);

//GET CLIENTVALUE BY VALUE
router.get(
  "/client/:value1/:value2/:value3",
  client_controller.client_value
);

module.exports = router;
