const mongoose = require("mongoose")
const Schema = mongoose.Schema

const autoIncrement = require('mongoose-auto-increment')
let connection = mongoose.createConnection(process.env.MONGO_DATABASE_URL, { useNewUrlParser: true })
autoIncrement.initialize(connection)

const productSchema = new Schema({
  
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    
  },
  rating: {
    type: Number,
    required: true,
    
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    validate: {
        validator: function(text) {
            return text.indexOf('https://') === 0;
        },
        message: 'la URL de la imagen debe empezar por https://'
    }
  },
  marker:{
    name: {
      type: String,
      required: true,
    },
    ciff: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
  }
  
});


const ProductsNature = mongoose.model("rutas", productSchema)
module.exports = ProductsNature