const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  day: { type: String, required: true },
  value: { type: Number, required: true },

//   date: { type: Date, default: Date.now }
});

//   mentorname: String,
const day = mongoose.model("day", calendarSchema);

module.exports = day;
