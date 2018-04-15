const express = require('express');
const orderServices = require('../services/order-service');
const db = require('../../database/models')

const orderRouter = express.Router();

// orderRouter.post('/orders', async function (req, res) {
//    res.json(await orderServices.findAll());
// })

orderRouter.get('/orders', async function (req, res) {
   // const id = req.params['id']
   // res.json(await orderServices.findAll({
      // include: [
      //    {model: db.orders}
      // ]
   // }))
})
// orderRouter.post('/orders', async function(req, res) {
//     res.json(await db.order.findAll());
// })

module.exports = orderRouter;