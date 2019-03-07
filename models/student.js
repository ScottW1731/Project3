const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    userName: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    mentor: {
        type: Schema.Types.ObjectId,
        ref: "Mentor"
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "Task"
    }]
});


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
