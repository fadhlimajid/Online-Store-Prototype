const express = require('express');
const us = require('../services/product-service');
const productRouter = express.Router();
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.raw());

productRouter.post('/products/register', async function (req, res) {
   let { name, description, price, stock } = req.body;
   let params = { name, description, price, stock }
   res.json(await us.postall(params));
})

productRouter.get('/products', async function (req, res) {
   res.json(await us.getall(req.query))
})

productRouter.put('/products/:id', async function (req, res) {
   let { name, description, price, stock } = req.body;
   let coba = { name, description, price, stock }
   let { id } = req.params
   res.json(await us.putall(coba, id).catch((error) => {
      console.log('=====', error)
   }))
})

productRouter.delete('/products/:id', async function (req, res) {
   let { id } = req.params
   res.json(await us.delete(id).catch((error) => {
      console.log('=====', error)
   }))
})

module.exports = productRouter;