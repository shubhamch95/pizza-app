const express = require('express');
const Order = require('../models/orderModel');
const router = express.Router();

// Route to get all orders
router.get('/orders', async (req, res) => {
    try {
      const orders = await Order.find().populate('pizzas');
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

// Route to create a new order
router.post('/orders', async (req, res) => {
  try {
    const { customerName, pizzas, totalAmount, mobileNumber } = req.body;
    const order = new Order({ customerName, pizzas, totalAmount, mobileNumber });
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get a specific order by ID
router.get('/orders/:id', async (req, res) => {
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
});

module.exports = router;
