const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 5001;
const userRouter = require('./routes/userRoute')
require('dotenv').config()


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))




app.use('/api', userRouter) //prefixing /api before any routes





app.get('/', (req, res) => {
    res.send("prisma server is running")
})



app.listen(port, () => {
    console.log("prisma server running")
});