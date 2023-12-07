const express = require('express');
 const pizzaRouter = require("./Router/pizzaRoutes");
 const orderRouter = require('./Router/orderRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json());
 app.use('/api/', pizzaRouter);
 app.use('/api/', orderRouter);


// MongoDB connection
try {
    mongoose.connect('mongodb://127.0.0.1:27017/pizza_app',{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    mongoose.connection.on("connected",()=>{
        console.log("Connected to the database successfully.!!");
    })
    mongoose.connection.on("error",()=>{
        console.log("Unable to connect the database.!!");
    })
} catch (error) {
    console.log("Unable to connect the database.!!");
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
