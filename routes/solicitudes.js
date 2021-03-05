const router = require('express').Router();
const {
    crearSolicitud,
    obtenerSolicitudes,
    obtenerSolicitud,
    modificarSolicitud,
    eliminarSolicitud
} = require('../controllers/solicitudes')

router.get('/', obtenerSolicitudes)
router.get('/:id', obtenerSolicitud)
router.post('/', crearSolicitud)
router.put('/:id', modificarSolicitud)
router.delete('/:id', eliminarSolicitud)

module.exports = router;