const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  mentorname: { type: String, required: true },
  password: { type: String, required: true },

  date: { type: Date, default: Date.now }
});

//   mentorname: String,
const mentor = mongoose.model("mentor", mentorSchema);

module.exports = mentor;
