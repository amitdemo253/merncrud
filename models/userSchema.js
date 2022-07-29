const mongoose = require("mongoose");
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter name'],
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    age: {
        type: String,
        required: [true,'Please enter age'],
    },
    mobile: {
        type: Number,
        required: [true,'Please enter mobile number'],
    },
    work: {
        type: String,
        required: [true,'Please enter work detail'],
    },
    add: {
        type: String,
        required: [true,'Please enter an address'],
    },
    desc: {
        type: String,
        required: [true,'Please enter description'],
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;