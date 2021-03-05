const Solicitud  = require('../models/Solicitud')

function crearSolicitud(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var solicitud = new Solicitud(req.body)
  res.status(201).send(solicitud)
}

function obtenerSolicitudes(req, res) {
  // Simulando dos usuarios y respondiendolos
  var solicitud1 = new Solicitud(5, 3, '23/marzo/2020');
  var solicitud2 = new Solicitud(6, 4, '24/junio/2020');
  res.send([solicitud1, solicitud2]);
}

function obtenerSolicitud(req, res){
 var solicitud1=new Solicitud(req.params.id,4,'28/marzo/2020');
 res.send(solicitud1);
}

function modificarSolicitud(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var solicitud1 = new Solicitud(req.params.id, 3, '23/marzo/2020')
  var modificaciones = req.body
  solicitud1 = { ...solicitud1, ...modificaciones }
  res.send(solicitud1)
}

function eliminarSolicitud(req, res) {
  res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

module.exports = {
  crearSolicitud,
  obtenerSolicitudes,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud
}