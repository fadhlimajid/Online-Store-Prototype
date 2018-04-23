const express = require('express');
const ord_det = require('../services/orders-details-service');
const Sequelize = require('sequelize');

const orderRouter = express.Router();
const os = new ord_det(Sequelize.Op)

orderRouter.post('/orders_details', async function (req, res) {
   let { users_id, orders_id, products_id, quantity } = req.body;
   let params = { users_id, orders_id, products_id, quantity };
   const orders_post = await os.postAll(params)
   res.json(orders_post);
})

orderRouter.get('/orders_details', async function (req, res) {
   const orders_get = await (os).getAll(req.query)
   res.json(orders_get)
})

// orderRouter.put('/orders_details/:id', async function (req, res) {
//    let { users_id, orders_details_id } = req.body;
//    let coba = { users_id, orders_details_id };
//    let { id } = req.params
//    const orders_put = await os.putAll(coba, id).catch((error) => {
//       console.log('=====', error)
//    })
//    res.json(orders_put)
// })

// orderRouter.delete('/orders_details/:id', async function (req, res) {
//    let { id } = req.params
//    order_delete = await os.delete(id).catch((error) => {
//       console.log('=====', error)
//    })
//    res.json(order_delete)
// })

module.exports = orderRouter;