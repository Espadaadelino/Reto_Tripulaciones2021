const ProductsNature = require("../models/products");


const data = {
  rutas: async (req, res, next) => {
    try {
      const rutas = await ProductsNature.find({});
      console.log(ProductsNature);
      res.json(rutas).status(200);
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
