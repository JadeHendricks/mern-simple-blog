const express = require('express');
const app = express();
const port = 3000; 
const connectDB = require('./db');

connectDB();

app.listen(port, () => console.log(`App is running on port: ${port}`))