const express = require('express');
const db = require('../../database/models');

const productRouter = express.Router();

productRouter.get('/products', async function (req, res) {
   res.json(await db.products.findAll());
})

productRouter.get('/products/:id', async function (req, res) {
   const id = req.params['id']
   res.json(await db.products.findAll({
      where:{
         id:id
      }
   }))
})
// productRouter.post('/products', async function(req, res) {
//     res.json(await db.user.findAll());
// })

module.exports = productRouter;