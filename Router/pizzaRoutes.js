const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

// Route to get all pizzas
router.get('/pizzas', pizzaController.getAllPizzas);

// Route to get a specific pizza by ID
router.get('/pizzas/:id', pizzaController.getPizzaById);

// Route to create a new pizza
router.post('/pizzas', pizzaController.createPizza);

// Route to update a pizza by ID
router.put('/pizzas/:id', pizzaController.updatePizza);

// Route to delete a pizza by ID
router.delete('/pizzas/:id', pizzaController.deletePizza);

module.exports = router;