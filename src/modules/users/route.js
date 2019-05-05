const express = require('express')
const router = express.Router();
const { x } = require('./controller')

router.post('/', x)