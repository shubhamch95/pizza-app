const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  pizzas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pizza',
    required: true
  }],
  mobileNumber: {
    type: Number,
    required: true
  }

});

const order = mongoose.model('Order', orderSchema);

module.exports = order;
