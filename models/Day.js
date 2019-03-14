const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema({
    // student: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Student"
    // },
    Date: {
        type: Date
    },
    value: {
        type: Number
    },
    // mood: {
    //     type: String
    // },
    // comment: {
    //     type: String
    // }
})

const Day = mongoose.model("Day", daySchema);

module.exports = Day;
