const Rutas = require("../models/rutas");
const Actividades = require("../models/actividades");
const Transportes = require("../models/transportes");
const Obstaculos = require("../models/obstaculos");

const data = {
  rutas: async (req, res, next) => {
    try {
      const rutas = await Rutas.find({});
      console.log(rutas[0].latitud);
      const latitudes =[]
      const longitudes=[]
      const calles = []
      const rutasLatitud = rutas[0].latitud;
      for (const property in rutasLatitud) {
        latitudes.push(rutasLatitud[property])
        /* console.log(rutasLatitud[property]); */
      }
      const rutasLongitud = rutas[0].longitud;
      for (const property in rutasLongitud) {
        longitudes.push(rutasLongitud[property])
        /* console.log(rutasLongitud[property]); */
      }
      const rutasCalle = rutas[0].calle;
      for (const property in rutasCalle) {
        calles.push(rutasCalle[property])
        /* console.log(rutasCalle[property]); */
      }
      const rutaFinal = latitudes.map((element, index) => {
        /* console.log(element, longitudes[index], calles[index],index) */
        return {
          coor:[element, longitudes[index]], 
          street: calles[index]
        }
        
      })
      const response = {rutaFinal}
      console.log(response)
      
      

      
      res.json(response).status(200);

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
  },
};
module.exports = data;
