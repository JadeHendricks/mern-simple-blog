const express = require('express');
const app = express();
const port = 3000; 
const connectDB = require('./db');
const userRouter = require('./routes/userRoute');

connectDB();

app.use(express.json());

//ROUTES
app.use('/api/v1/auth', userRouter);

app.listen(port, () => console.log(`App is running on port: ${port}`))