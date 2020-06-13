const express = require('express');
const app = express();
const port = 5000; 
const connectDB = require('./db');
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');

connectDB();

app.use(express.json());

//ROUTES
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

app.listen(port, () => console.log(`App is running on port: ${port}`))