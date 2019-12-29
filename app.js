const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to DB!'))
.catch((err) => console.log(err))




// Start Server
app.listen(3000, () => console.log('Server started on port 3000...'))