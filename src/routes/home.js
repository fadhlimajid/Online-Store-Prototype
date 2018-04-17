const express = require('express');
const homeRouter = express.Router();
const path = require('path');

module.exports = homeRouter.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '../../../public/form.html'))
})