const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
app.use(cors());
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

app.get('/', cors(), plantsRoute.getPlants);
app.post('/addPlant', cors(), plantsRoute.addPlants);
app.delete('/:id', cors(), plantsRoute.deletePlant);
app.get('/:id', cors(), plantsRoute.findAPlant);
app.patch('/:id', cors(), plantsRoute.updatePlant);

// Start Server
// app.listen(3000, () => console.log('Server started on port 3000...'))

const port = process.env.PORT || 3001;
app.listen(port, console.log("MongoDB is Connected..."));