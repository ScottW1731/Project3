const mongoose = require("mongoose");
const db = require("../models");

// This file empties the students collection and inserts the students below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/student"
);

const studentSeed = [
  {
    title : "student", 
    first : "Scott", 
    last : "Wagner", 
    email : "example1@gmail.com", 
    date: new Date(Date.now())
  },
  {
    title : "student", 
    first : "Homer", 
    last : "Simpson", 
    email : "example2@gmail.com"
  },
  {
    title : "student", 
    first : "Bart", 
    last : "Simpson", 
    email : "example3@gmail.com"
  },
  {
    title : "student", 
    first : "Marge", 
    last : "Simpson", 
    email : "example4@gmail.com"
  },
  {
    title : "student", 
    first : "Lisa", 
    last : "Simpson", 
    email : "example5@gmail.com"
  },
  {
    title : "student", 
    first : "Maggie", 
    last : "Simpson", 
    email : "example2@gmail.com", 
  }
];

db.student
  .remove({})
  .then(() => db.student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
