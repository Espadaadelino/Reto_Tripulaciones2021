require("dotenv").config();
require('./utils/db')
const express = require('express')
const router =require('./routes/routes')
const app = express()
const port = process.env.PORT || 4000
app.get('/', (req, res) => {
  res.send('Esta es la Home')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/',router)


app.listen(process.env.PORT, () => {
    console.log(`API listening at http://localhost:${port}`);
  });