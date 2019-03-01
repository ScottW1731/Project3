const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentname: { type: String, required: true },
  email: { type: String, required: true },
//   mentorname: String,
  date: { type: Date, default: Date.now }
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
