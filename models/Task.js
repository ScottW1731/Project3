const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    taskName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;