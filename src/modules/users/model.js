const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,

        name:
        {
            type: String,
            required: [true, 'name is required']
        },

        email: {
            type: String,
            required: true

        },
        password: {
            type: String,
            required: true

        },

        phone_no: {
            type: String,
            required: true,
            minlength: [10, 'Phone number should of 10 digits'],
            maxlength: [10, 'Phone number should be of 10 digits']
        }

    }
)
module.exports = mongoose.model('Users', userSchema)