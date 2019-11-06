var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Router home page');
})

// About page route.
router.get('/clients', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;