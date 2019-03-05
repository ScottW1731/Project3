const mongoose = require("mongoose");
const db = require("../models");

// This file empties the students collection and inserts the students below as well as for mentors
// npm run seed to insert into mongodb from base folder Project3

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/student"
);

const studentSeed = [
  {
    title : "student", 
    first : "Scott", 
    last : "Wagner", 
    password : "example11", 
    date: new Date(Date.now())
  },
  {
    title : "student", 
    first : "Homer", 
    last : "Simpson", 
    password : "example21"
  },
  {
    title : "student", 
    first : "Bart", 
    last : "Simpson", 
    password : "example31"
  },
  {
    title : "student", 
    first : "Marge", 
    last : "Simpson", 
    password : "example41"
  },
  {
    title : "student", 
    first : "Lisa", 
    last : "Simpson", 
    password : "example51"
  },
  {
    title : "student", 
    first : "Maggie", 
    last : "Simpson", 
    password : "example61", 
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

const mentorSeed = [
  {
    title : "mentor", 
    first : "Jamie", 
    last : "Benn", 
    password : "example10", 
    date: new Date(Date.now())
  },
  {
    title : "mentor", 
    first : "Tyler", 
    last : "Seguin", 
    password : "example20"
  },
  {
    title : "mentor", 
    first : "Alexander", 
    last : "Radulov", 
    password : "example30"
  },
  {
    title : "mentor", 
    first : "Radek", 
    last : "Faksa", 
    password : "example40"
  },
  {
    title : "mentor", 
    first : "Ben", 
    last : "Bishop", 
    password : "example50"
  },
  {
    title : "mentor", 
    first : "Anton", 
    last : "Khudobin", 
    password : "example60", 
  }
];

db.mentor
  .remove({})
  .then(() => db.mentor.collection.insertMany(mentorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
