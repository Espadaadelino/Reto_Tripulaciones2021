const ProductsNature = require("../models/products");


const data = {
  rutas: async (req, res, next) => {
    try {
      const products = await ProductsNature.find({});
      console.log(ProductsNature);
      res.json(products).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  actividades: (req, res, next) => {
    res.send('Esta es actividades')
  },
  transportes: (req, res, next) => {
    res.send('Esta es transportes')
  },

};
module.exports = data;
