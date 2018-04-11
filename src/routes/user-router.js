const express = require('express');
const db = require('../../database/models');

const userRouter = express.Router();

userRouter.get('/users', async function (req, res) {
   res.json(await db.users.findAll());
})

userRouter.get('/users/:id', async function (req, res) {
   const id = req.params['id']
   res.json(await db.users.findAll({
      where: {
         id: id
      }
   }))
})

// userRouter.post('/users', async function (req, res) {
//    r
//    res.json(await db.user.findAll());
// })

// userRouter.put('/users/:id', async function (req, res) {
//    const id = req.params['id']
//    res.json(await db.user.findAll());
// })

module.exports = userRouter;