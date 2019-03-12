const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the students collection and inserts the students below as well as for mentors
// npm run seed to insert into mongodb from base folder Project3

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/student"
);

const userSeed = [
  {
    mentorMentee : "student", 
    first : "Scott", 
    last : "Wagner", 
    password : "example11", 
    email:"example11@gmail.com",
    date: new Date(Date.now())
  },
  {
    mentorMentee : "student", 
    first : "Homer", 
    last : "Simpson", 
    password : "example21",
    email:"example21@gmail.com"
  },
  {
    mentorMentee : "student", 
    first : "Bart", 
    last : "Simpson", 
    password : "example31",
    email:"example31@gmail.com"
  },
  {
    mentorMentee : "student", 
    first : "Marge", 
    last : "Simpson", 
    password : "example41",
    email:"example41@gmail.com"
  },
  {
    mentorMentee : "student", 
    first : "Lisa", 
    last : "Simpson", 
    password : "example51",
    email:"example51@gmail.com"
  },
  {
    mentorMentee : "student", 
    first : "Maggie", 
    last : "Simpson", 
    password : "example61", 
    email:"example61@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Jamie", 
    last : "Benn", 
    password : "example10", 
    email:"example10@gmail.com",
    date: new Date(Date.now())
  },
  {
    mentorMentee : "mentor", 
    first : "Tyler", 
    last : "Seguin", 
    password : "example20",
    email:"example20@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Alexander", 
    last : "Radulov", 
    password : "example30",
    email:"example30@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Radek", 
    last : "Faksa", 
    password : "example40",
    email:"example40@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Ben", 
    last : "Bishop", 
    password : "example50",
    email:"example50@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Anton", 
    last : "Khudobin", 
    password : "example60",
    email:"example60@gmail.com"
  }
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
