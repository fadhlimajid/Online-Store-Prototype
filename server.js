const express = require("express");
const userRouter = require('./src/routes/user-router');
const productRouter = require('./src/routes/product-router');
const orderRouter = require('./src/routes/order-router');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});



app.use('/api', userRouter);
app.use('/api', productRouter);
// app.use('/api', orderRouter);
app.listen(3000, function () {
   console.log("server is running on port 3000")
});