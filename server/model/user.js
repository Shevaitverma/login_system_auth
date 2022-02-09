const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 255
    },
    email:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password:{
        type: String,
        require: true,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user',userSchema);