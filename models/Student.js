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
        // default ID for mentorexmaple user
        default: "5c8bba2f0a23e2002ac39297"
    }
});


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
