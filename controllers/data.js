const RetoTripulaciones = require("../models/products");


const data = {
  rutas: async (req, res, next) => {
    try {
      const rutas = await RetoTripulaciones.find({});
      console.log(RetoTripulaciones);
      res.json(rutas).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  actividades: async (req, res, next) => {
    try {
      const actividades = await RetoTripulaciones.find({});
      console.log(RetoTripulaciones);
      res.json(actividades).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  transportes: (req, res, next) => {
    res.send('Esta es transportes')
  },

};
module.exports = data;
