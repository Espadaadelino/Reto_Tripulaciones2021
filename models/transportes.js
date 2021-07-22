const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrement = require("mongoose-auto-increment");
let connection = mongoose.createConnection(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
autoIncrement.initialize(connection);

const productSchema = new Schema({
  estacion: {
    type: Object,
    required: true,
    unique: true,
  },
  latitud: {
    type: Object,
    required: true,
  },
  longitud: {
    type: Object,
    required: true,
  }

});

const Transportes = mongoose.model("transportes", productSchema);
module.exports = Transportes;
