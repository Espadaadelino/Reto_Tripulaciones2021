const ProductsNature = require("../models/products");

const data = {
  search: async (req, res, next) => {
    try {
      const products = await ProductsNature.find({});
      console.log(ProductsNature);
      res.json(products).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
};
module.exports = data;
