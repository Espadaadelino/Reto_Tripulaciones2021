const router = require('express').Router()
const data = require('../controllers/data');


router.get('/api/rutas', data.rutas)
/* por si se puede recuperar con el id todos los objetos */
/* router.get('/api/rutas:id', data.rutas) */

router.get('/api/actividades', data.actividades)
/* por si se puede recuperar con el id todos los objetos */
/* router.get('/api/actividades:id', data.actividades) */

router.get('/api/transportes:', data.transportes)
/* por si se puede recuperar con el id todos los objetos */
/* router.get('/api/transportes:id', data.transportes) */

router.get('/api/obstaculos', data.obstaculos)
/* por si se puede recuperar con el id todos los objetos */
/* router.get('/api/obstaculos:id', data.obstaculos) */

module.exports = router

