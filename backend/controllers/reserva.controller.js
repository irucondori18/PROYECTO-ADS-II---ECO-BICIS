const Reserva = require('../models/reserva');
const reservaCtrl = {}

//Recupera todas las reservas
reservaCtrl.getReservas = async (req, res) => {
  var reservas = await Reserva.find();
  res.json(reservas);
}

reservaCtrl.getOneReserva = async (req, res) => {
  const reserva = await Reserva.findById(req.params.id);
  res.json(reserva);
}


//Alta de reserva
reservaCtrl.createReserva = async (req, res) => {
  var reserva = new Reserva(req.body);
  try {
    await reserva.save();
    res.json({
      'status': '1',
      'msg': 'Reserva guardada.'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error procesando operacion.'
    })
  }
}

module.exports = reservaCtrl;
