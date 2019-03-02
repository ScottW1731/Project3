const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    // mentorMentee: {
    //     type: String,
    //     required: true
    // },
    // userName: {
    //     type: String,
    //     required: true,
    //     unigue: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;