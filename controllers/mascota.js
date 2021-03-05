/*  Archivo controllers/mascota.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascota(req, res) {
  // Simulando dos usuarios y respondiendolos
  var mascota1  = new Mascota(3, 'Maya', 'perro');
  var mascota2  = new Mascota(4, 'Kerchak', 'perro');
  res.send([mascota1, mascota2]);
}

function modificarMascota(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var mascota1 = new Mascota(req.params.id, 'Maya', 'perro');
  var modificaciones = req.body;
  mascota1= { ...mascota1, ...modificaciones };
  res.send(mascota1);
}

function eliminarMascota(req, res) {
  res.status(200).send(`Mascota ${req.params.id} eliminada`);
}

module.exports = {
  crearMascota,
  obtenerMascota,
  modificarMascota,
  eliminarMascota
}