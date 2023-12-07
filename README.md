# Pizza App

Welcome to the Pizza App project! This application allows users to manage and order pizzas.

## Getting Started

### Clone the repository:

**git clone** https://github.com/your-username/pizza-app.git <br> **cd** pizza-app

## Install dependencies:

**npm install**

**PORT**=2000<br>**DB_CONNECTION_URL**=mongodb://127.0.0.1:27017/db_name

## Start the server:

 **npm start**

The server will run on the specified port, and you should see "Server is running on http://localhost:3000" in the console.

## Project Structure:

* **index.js:** The main entry point of the application where the Express app is configured and the server is started.<br>
* **models/pizzaModel.js:** Defines the Mongoose schema for the pizzas collection.<br>
* **Router/pizzaRoutes.js:** Contains the Express routes for handling CRUD operations on the pizzas collection.<br>
* **Router/orderRoutes.js:** Contains the Express routes for handling orders.

## API Endpoints:

**Get All Pizzas:** 
<br> URL:/api/pizzas/ <br>Method: GET <br>Description: Get a list of all pizzas.

**Get Single Pizza**
<br> URL: /api/pizzas/:id <br>Method: GET <br>Description: Get details of a single pizza by its ID.

**Create a New Pizza**
URL: /api/pizzas
Method: POST
Description: Create a new pizza. Requires a JSON body with pizza details.

**Example JSON body:** <br>
{
  "name": "Margherita",<br>
  "size": "medium",<br>
  "toppings": ["tomato sauce", "mozzarella", "basil"],<br>
  "totalAmount": 12.99
}

**Get All Orders**
<br>URL: /api/orders
<brMethod: GET
<brDescription: Get a list of all orders.
Create a New Order
URL: /api/orders
Method: POST
Description: Place a new order. Requires a JSON body with order details.

**Example JSON body:** 

{
 "customerName": "John Doe",<br>"pizzas": ["pizzaId1",pizzaId2], <br>"totalAmount": 25.99,<br>"mobileNumber": 1234567890<br> 
}

## Database Connection:
The project uses Mongoose to connect to a MongoDB database. The connection URL is specified in the .env file.


**DB_CONNECTION_URL**=mongodb://127.0.0.1:27017/db_name

## Contributing:
Feel free to contribute to the project by opening issues or creating pull requests. Your feedback and contributions are highly appreciated!
