const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrement = require("mongoose-auto-increment");
let connection = mongoose.createConnection(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
autoIncrement.initialize(connection);

const productSchema = new Schema({
  actividad: {
    type: Object,
    required: true,
    unique: true,
  },
  categoria: {
    type: Object,
    required: true,
  },
  descripcion: {
    type: Object,
    required: true,
  },
  latitud: {
    type: Object,
    required: true,
  },
  longitud: {
    type: Object,
    Required: true,
  },
  web: {
    type: Object,
    Required: true,
  },
});

const RetoTripulaciones = mongoose.model("actividades", productSchema);
module.exports = RetoTripulaciones;
