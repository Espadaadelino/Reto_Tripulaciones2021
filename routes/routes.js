const router = require('express').Router()
const data = require('../controllers/data');


router.get('/api/rutas', data.rutas)
router.get('/api/actividades', data.actividades)
router.get('/api/transportes', data.transportes)
router.get('/api/nature', data.products)

module.exports = router

