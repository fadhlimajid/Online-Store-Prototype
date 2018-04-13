const express = require('express');
const us = require('../services/user-service');
const users = require('../../database/models').users;
const userRouter = express.Router();
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.raw());

userRouter.post('/users/register', async function (req, res) {
   let { username, password, email, address, phone } = req.body;
   let params = { username, password, email, address, phone }
   res.json(await us.postall(params));
})

userRouter.get('/users', async function (req, res) {
   res.json(await us.getall(req.query))
})

userRouter.put('/users/:id', async function (req, res) {
   let { username, password, email, address, phone } = req.body;
   let coba = { username, password, email, address, phone}
   let {id} = req.params
   res.json(await us.putall(coba,id).catch((error)=>{
      console.log('=====',error)
   }))
})

userRouter.delete('/users/:id', async function (req, res) {
   let {id} = req.params
   res.json(await us.delete(id).catch((error)=>{
      console.log('=====',error)
   }))
})

module.exports = userRouter;