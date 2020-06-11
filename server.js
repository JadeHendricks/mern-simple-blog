const express = require('express');
const app = express();
const port = 3000; 
const connectDB = require('./db');
const authRouter = require('./routes/authRoute');

connectDB();

app.use(express.json());

//ROUTES
app.use('/api/v1/auth', authRouter);

app.listen(port, () => console.log(`App is running on port: ${port}`))