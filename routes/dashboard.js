var express = require('express');
var router = express.Router();

var client_controller = require('../controllers/clientController');


// GET request for one Author.
router.get('/client/:id', client_controller.client_detail);


module.exports = router;