const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentname: { type: String, required: true },
  password: { type: String, required: true },

  date: { type: Date, default: Date.now }
});

//   mentorname: String,
const student = mongoose.model("student", studentSchema);

module.exports = student;
