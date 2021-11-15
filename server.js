// Load enviroment variables
require('dotenv').config();

// Import express module
const express = require('express');
const app = express();
const port = 3000;

// Import mongoose module
const mongoose = require('mongoose');

// Connect to DB and inform about any error
mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Connected to Database!');
    })
    .catch((err) => {
    console.error('Failed to connect:', err.message);
    });

// Add listener for errors in DB Connection
const db = mongoose.connection;
db.on('error', (err) => console.log('Error:', err.message));

// Add json parser middleware
app.use(express.json());

// Add route for subscribers
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

app.listen(port, () => console.log('Server Started'));
