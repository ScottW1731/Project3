const mongoose = require("mongoose");
const db = require("../../models");

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
    email:"example11@gmail.com",
    date: new Date(Date.now())
  },
  {
    title : "student", 
    first : "Homer", 
    last : "Simpson", 
    password : "example21",
    email:"example21@gmail.com"
  },
  {
    title : "student", 
    first : "Bart", 
    last : "Simpson", 
    password : "example31",
    email:"example31@gmail.com"
  },
  {
    title : "student", 
    first : "Marge", 
    last : "Simpson", 
    password : "example41",
    email:"example41@gmail.com"
  },
  {
    title : "student", 
    first : "Lisa", 
    last : "Simpson", 
    password : "example51",
    email:"example51@gmail.com"
  },
  {
    title : "student", 
    first : "Maggie", 
    last : "Simpson", 
    password : "example61", 
    email:"example61@gmail.com"
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
    email:"example10@gmail.com",
    date: new Date(Date.now())
  },
  {
    title : "mentor", 
    first : "Tyler", 
    last : "Seguin", 
    password : "example20",
    email:"example20@gmail.com"
  },
  {
    title : "mentor", 
    first : "Alexander", 
    last : "Radulov", 
    password : "example30",
    email:"example30@gmail.com"
  },
  {
    title : "mentor", 
    first : "Radek", 
    last : "Faksa", 
    password : "example40",
    email:"example40@gmail.com"
  },
  {
    title : "mentor", 
    first : "Ben", 
    last : "Bishop", 
    password : "example50",
    email:"example50@gmail.com"
  },
  {
    title : "mentor", 
    first : "Anton", 
    last : "Khudobin", 
    password : "example60",
    email:"example60@gmail.com"
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
