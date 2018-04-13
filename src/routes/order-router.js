const express = require('express');
const orderServices = require('../services/order-service');

const orderRouter = express.Router();

// orderRouter.post('/orders', async function (req, res) {
//    res.json(await orderServices.findAll());
// })

orderRouter.get('/orders/:id', async function (req, res) {
   const id = req.params['id']
   res.json(await orderServices.findAll({
      where:{
         id:id
      }
   }))
})
// orderRouter.post('/orders', async function(req, res) {
//     res.json(await db.order.findAll());
// })

module.exports = orderRouter;