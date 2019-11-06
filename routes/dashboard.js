var express = require('express');
var router = express.Router();

var client_controller = require('../controllers/clientController');
var pqr_controller = require("../controllers/pqrController");

// GET request for one Author.
router.get('/client/:id', client_controller.client_detail);

//GET PQR per product type
router.get('/pqr/producttype', pqr_controller.pqr_list);


//GET PQR per client 
router.get('/pqr/client', pqr_controller.pqr_per_client);

module.exports = router;