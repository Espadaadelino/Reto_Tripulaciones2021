const router = require('express').Router()
const data = require('../controllers/data');


router.get('/api/consultabbdd', data.search)

module.exports = router

//localhost:5000?name=david

//req.query.name
// /api/:name
// localhost:5000/api/david
//req.params.name