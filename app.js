const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to DB!'))
.catch((err) => console.log(err))

// mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true } || 'mongodb://localhost/plant-shop-api');

// Middleware
app.use(express.json());

// Routes
const plantsRoute = require('./routes/plantsRoute');

app.get('/', plantsRoute.getPlants);
app.post('/addPlant', plantsRoute.addPlants);
app.delete('/:id', plantsRoute.deletePlant);
app.get('/:id', plantsRoute.findAPlant);
app.patch('/:id', plantsRoute.updatePlant);

// Start Server
// app.listen(3000, () => console.log('Server started on port 3000...'))

const port = process.env.PORT || 3000;
app.listen(port, console.log("MongoDB is Connected..."));