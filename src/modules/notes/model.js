const mongoose = require('mongoose')

const { Schema } = mongoose

const notesSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title:
        {
            type: String,
            required: [true, 'title is mandatory']
        },

        content: {
            type: String
        }
    }
)

module.exports = mongoose.model('Notes', notesSchema)