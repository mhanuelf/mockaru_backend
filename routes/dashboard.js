var express = require('express');
var router = express.Router();

var client_controller = require('../controllers/clientController');
var pqr_controller = require("../controllers/pqrController");
var product_controller = require("../controllers/productController");

// GET request for one Author.
router.get('/client/:id', client_controller.client_detail);

//GET PQR per product type
router.get('/pqr/producttype/', pqr_controller.pqr_list);


//GET PQR per client 
router.get('/pqr/client', pqr_controller.pqr_per_client);

//GET Product by id  
router.get('/product/:productId', product_controller.product_detail);

//GET PQR by productType  
router.get('/pqr/:productTypeId', pqr_controller.pqr_per_product_type);

//GET CLIENTS BY COMPLAIN
router.get('/client/complain/:complain',client_controller.list_clients_by_complain);

module.exports = router;