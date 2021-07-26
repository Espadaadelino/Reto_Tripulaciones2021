const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrement = require("mongoose-auto-increment");
let connection = mongoose.createConnection(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
autoIncrement.initialize(connection);

const productSchema = new Schema({
  latitud: {
    type: Object,
    required: true,
    unique: true,
  },
  longitud: {
    type: Object,
    required: true,
  },
  calle: {
    type: Object,
    required: true,
  },
  accesibilidad: {
    type: Object,
    required: true,
  }
  
});

const RetoTripulaciones = mongoose.model("obstaculos", productSchema);
module.exports = RetoTripulaciones;
