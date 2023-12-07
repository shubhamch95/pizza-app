const ex = require("express");
const Pizzas = require('../models/pizzaModel');
const router = ex.Router();

//Route to get all pizzas
router.get('/pizzas', async (req, res) => {
  try {
    const pizzas = await Pizzas.find();
    res.json(pizzas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get a specific pizza by ID
router.get('/pizzas/:id', async (req, res) => {
  try {
    const pizza = await Pizzas.findById(req.params.id);
    if (!pizza) {
      return res.status(404).send('Pizza not found');
    }
    res.json(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to create a new pizza
router.post('/pizzas', async (req, res) => {
  try {
    const pizza = new Pizzas(req.body);
    await pizza.save();
    res.status(201).json(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to update a pizza by ID
router.put('/pizzas/:id', async (req, res) => {
  try {
    const pizza = await Pizzas.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pizza) {
      return res.status(404).send('Pizza not found');
    }
    res.json(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to delete a pizza by ID
router.delete('/pizzas/:id', async (req, res) => {
  try {
    const pizza = await Pizzas.findByIdAndDelete(req.params.id);
    if (!pizza) {
      return res.status(404).send('Pizza not found');
    }
    res.json(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;