var Product = require('../models/products');



// Display detail data for a specific Product.
exports.product_detail = function(productId, res) {
    Product.getProductById(function(err, product) {
        console.log('controller product by id'+productId);
        if (err)
          res.send(err);
          console.log('res', product);
        res.send(product);
      });
  

};




