const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Notes = require('./model')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const notes = await Notes.findById(id)
    res.send(notes)
})

router.post('/:id', async (req, res) => {
    let notes = new Notes({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content
    })
    notes = await Notes.save()
    res.send(notes)
})

router.put('/:id', async (req, res) => {
    const notes = await Notes.findById(
        {
            title: req.body.title,
            content: req.body.content
        }
    )
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const removedNotes = Notes.findByIdAndDelete({ _id: id })

})