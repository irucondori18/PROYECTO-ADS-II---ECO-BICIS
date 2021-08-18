const mongoose = require('mongoose');
const { Schema } = mongoose;
const ReservaSchema = new Schema({
  idCliente: { type: String, required: true },
  idBicicleta: { type: String, required: true },
  horasdeprestamo: { type: Number, required: true },
  fechahorainicio: { type: String, required: true },
  fechahorafin: { type: String, required: true },
  monto: { type: Number, required: true },
  codigoPago: { type: String, required: true }
})
module.exports = mongoose.models.Reserva || mongoose.model('Reserva', ReservaSchema);