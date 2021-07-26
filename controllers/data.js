const Rutas = require("../models/rutas");
const Actividades = require("../models/actividades");
const Transportes = require("../models/transportes");
const Obstaculos = require("../models/obstaculos");



const data = {
  rutas: async (req, res, next) => {
    try {
      const rutas = await Rutas.find({});
      res.json(rutas.longitud).status(200);
      /* res.json(rutas.longitud).status(200); */
      /* console.log(rutas.longitud); */
    } catch (error) {
      console.log(error);
      next();
    }
  },
  actividades: async (req, res, next) => {
    try {
      const actividades = await Actividades.find({});
      /* console.log(actividades); */
      res.json(actividades).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  transportes: async (req, res, next) => {
    try {
      const transportes = await Transportes.find({});
      /* console.log(transportes); */
      res.json(transportes).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  
  obstaculos: async (req, res, next) => {
    try {
      const obstaculos = await Obstaculos.find({});
      /* console.log(transportes); */ 
      res.json(obstaculos).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  }

};
module.exports = data;
