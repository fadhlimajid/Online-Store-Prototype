const express = require('express');
const db = require('../../database/models');

const orderRouter = express.Router();

orderRouter.post('/orders', async function (req, res) {
   res.json(await db.orders.findAll());
})

orderRouter.get('/orders/:id', async function (req, res) {
   const id = req.params['id']
   res.json(await db.orders.findAll({
      where:{
         id:id
      }
   }))
})
// orderRouter.post('/orders', async function(req, res) {
//     res.json(await db.user.findAll());
// })

module.exports = orderRouter;