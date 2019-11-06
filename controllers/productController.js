var Product = require('../models/products');



// Display detail data for a specific Product.
exports.product_detail = function(req, res) {
    Product.getProductById(req.params.productId,function(err, product) {
        console.log('controller product by id'+req.params.productId);
        if (err)
          res.send(err);
          console.log('res', product);
        res.send(product);
      });
  

};




