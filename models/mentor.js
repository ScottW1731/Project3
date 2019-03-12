const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }]
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
