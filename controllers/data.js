const Rutas = require("../models/rutas");
const Actividades = require("../models/actividades");
const Transportes = require("../models/transportes");
const Obstaculos = require("../models/obstaculos");

const data = {
  rutas: async (req, res, next) => {
    try {
      const rutas = await Rutas.find({});
      /* console.log(rutas[0].latitud); */
      const latitudes = [];
      const longitudes = [];
      const calles = [];
      const rutasLatitud = rutas[0].latitud;
      for (const property in rutasLatitud) {
        latitudes.push(rutasLatitud[property]);
        /* console.log(rutasLatitud[property]); */
      }
      const rutasLongitud = rutas[0].longitud;
      for (const property in rutasLongitud) {
        longitudes.push(rutasLongitud[property]);
        /* console.log(rutasLongitud[property]); */
      }
      const rutasCalle = rutas[0].calle;
      for (const property in rutasCalle) {
        calles.push(rutasCalle[property]);
        /* console.log(rutasCalle[property]); */
      }
      const rutaFinal = latitudes.map((element, index) => {
        /* console.log(element, longitudes[index], calles[index],index) */
        return {
          coor: [element, longitudes[index]],
          street: calles[index],
        };
      });
      const response = { rutaFinal };
      console.log(response);

      res.json(response).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  actividades: async (req, res, next) => {
    try {
      const actividades = await Actividades.find({});
      const actividad = [];
      const latitudes = [];
      const longitudes = [];
      const categorias = [];
      const webs = [];
      const descripciones = [];

      const actividadesActividad = actividades[0].actividad;
      for (const property in actividadesActividad) {
        actividad.push(actividadesActividad[property]);
        /* console.log(rutasLatitud[property]); */
      }

      const actividadesLatitud = actividades[0].latitud;
      for (const property in actividadesLatitud) {
        latitudes.push(actividadesLatitud[property]);
        /* console.log(rutasLatitud[property]); */
      }

      const actividadesLongitud = actividades[0].longitud;
      for (const property in actividadesLongitud) {
        longitudes.push(actividadesLongitud[property]);
        /* console.log(rutasLongitud[property]); */
      }
      const actividadesCategoria = actividades[0].categoria;
      for (const property in actividadesCategoria) {
        categorias.push(actividadesCategoria[property]);
        /* console.log(rutasCalle[property]); */
      }
      const actividadesWeb = actividades[0].web;
      for (const property in actividadesWeb) {
        webs.push(actividadesWeb[property]);
        /* console.log(rutasCalle[property]); */
      }
      const actividadesDescripcion = actividades[0].descripcion;
      for (const property in actividadesDescripcion) {
        descripciones.push(actividadesDescripcion[property]);
        /* console.log(rutasCalle[property]); */
      }
      const actividadesFinal = latitudes.map((element, index) => {
        return {
          actividad: actividad[index],
          coor: [element, longitudes[index]],
          categoria: categorias[index],
          web: webs[index],
          descripcion: descripciones[index],
        };
      });
      const response = { actividadesFinal };
      console.log(response);

      res.json(actividades).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  transportes: async (req, res, next) => {
    try {
      const transportes = await Transportes.find({});
      const latitudes = [];
      const longitudes = [];
      const estaciones = [];

      const transportesLatitud = transportes[0].latitud;
      for (const property in transportesLatitud) {
        latitudes.push(transportesLatitud[property]);
        /* console.log(rutasLatitud[property]); */
      }

      const transportesLongitud = transportes[0].longitud;
      for (const property in transportesLongitud) {
        longitudes.push(transportesLongitud[property]);
        /* console.log(rutasLongitud[property]); */
      }

      const transportesEstacion = transportes[0].estacion;
      for (const property in transportesEstacion) {
        estaciones.push(transportesEstacion[property]);
        /* console.log(rutasLongitud[property]); */
      }
      const transportesFinal = latitudes.map((element, index) => {
        /* console.log(element, longitudes[index], calles[index],index) */
        return {
          estacion: estaciones[index],
          coor: [element, longitudes[index]],
        };
      });
      const response = { transportesFinal };
      console.log(response);
      res.json(transportes).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },

  obstaculos: async (req, res, next) => {
    try {
      const obstaculos = await Obstaculos.find({});
      const latitudes = [];
      const longitudes = [];
      const calles = [];
      const accesibilidades = [];

      const obstaculosLatitud = obstaculos[0].latitud;
      for (const property in obstaculosLatitud) {
        latitudes.push(obstaculosLatitud[property]);
        /* console.log(rutasLatitud[property]); */
      }

      const obstaculosLongitud = obstaculos[0].longitud;
      for (const property in obstaculosLongitud) {
        longitudes.push(obstaculosLongitud[property]);
        /* console.log(rutasLongitud[property]); */
      }

      const obstaculosCalle = obstaculos[0].calle;
      for (const property in obstaculosCalle) {
        calles.push(obstaculosCalle[property]);
        /* console.log(rutasLongitud[property]); */
      }

      const obstaculosAccesibilidad = obstaculos[0].accesibilidad;
      for (const property in obstaculosCalle) {
        accesibilidades.push(obstaculosAccesibilidad[property]);
        /* console.log(rutasLongitud[property]); */
      }
      const obstaculosFinal = latitudes.map((element, index) => {
        /* console.log(element, longitudes[index], calles[index],index) */
        return {
          coor: [element, longitudes[index]],
          street: calles[index],
          accesibilidad: accesibilidades[index],
        };
      });
      const response = { obstaculosFinal };
      console.log(response);
      /* console.log(transportes); */
      res.json(obstaculos).status(200);
    } catch (error) {
      console.log(error);
      next();
    }
  },
};
module.exports = data;
