const express = require('express');
const prolistRouter = express.Router();
const path = require('path');

module.exports = prolistRouter.get('/products', async function (req, res) {
   res.sendFile(path.join(__dirname + '../../../public/store.html'))
})