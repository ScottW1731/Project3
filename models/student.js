const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    mentor: {
        type: Schema.Types.ObjectId,
        ref: "Mentor",
        default: "5c83cc7eaf8d0e095a6a8d89"
    }
});


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
