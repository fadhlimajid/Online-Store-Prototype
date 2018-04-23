const express = require('express');
const paymentRouter = express.Router();
const app = express()
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');
const axios = require('axios');
const orderService = require('../services/order-service');

const os = new orderService(Sequelize.Op)

app.use(bodyParser.raw());


paymentRouter.post('/payment', async function (req, res) {
   let { gross_amount } = req.body;

   const options = {
      headers: {
         Authorization: "Basic U0ItTWlkLXNlcnZlci1yZUI1WVJVRlVpWGgyc2VHM1J1RXpTTEo6",
         Accept: "application/json",
         "Content-Type": "application/json"
      }
   }

   const data = {
      "transaction_details": {
         order_id: order_id,
         gross_amount: parseInt(gross_amount)
      }
   }


   axios.post('https://app.sandbox.midtrans.com/snap/v1/transactions', data, options).then(response => {
      res.json(response.data)
   }).catch(err => {
      console.error(err)
      res.send(400)
   })

});

paymentRouter.get('/payment', async function (req, res) {

   res.send(os.postAll())
})

module.exports = paymentRouter;