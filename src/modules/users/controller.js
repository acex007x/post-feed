const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Users = require('./model')

router.get('/', async (req, res) => {
    const users = await Users.find()
    res.send(users)
})
router.get('/:id', async (req, res) => {
    const users = await Users.findById()
    res.send(users)
})

router.post('/', async (req, res) => {
    let users = new Users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone_no: req.body.phone_no
    })
    users = await Users.save()
    res.send(users)
})

