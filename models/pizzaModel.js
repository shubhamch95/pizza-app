const mongoose = require('mongoose');
const pizzaschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        required: true
    },

    toppings: {
        type: [String],
        default: []
    },
    totalAmount: {
        type: Number,
        required: true
      },

});
const pizza = mongoose.model("Pizza", pizzaschema);
module.exports = pizza;