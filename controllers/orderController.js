// controllers/orderController.js
const Order = require('../models/orderModel');

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('pizzas');
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get a specific order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).send('Order not found');
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { customerName, pizzas, totalAmount, mobileNumber } = req.body;
    const order = new Order({ customerName, pizzas, totalAmount, mobileNumber });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
