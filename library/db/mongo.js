const express = require('express')
const { MONGO_USER, MONGO_PASSWORD } = require('../../config/config')
const mongoose = require('mongoose')
const app = express()


mongoose
    .connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-8xehm.mongodb.net/posts?retryWrites=true`
    )
    .then(() => {
        app.listen(3002)
        console.log('connected to mongoDBAtlas and listening to PORT 3002 ')
    }).catch(err => {
        console.log('unable to connect to mongodbAtlas', err)
    })