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
    username : "example11",
    password : "example11", 
    email:"example11@gmail.com",
    date: new Date(Date.now())
  },
  {
    mentorMentee : "student", 
    first : "Homer", 
    last : "Simpson", 
    username : "example21",
    password : "example21",
    email:"example21@gmail.com"
  },
  {
    mentorMentee : "student", 
    first : "Bart", 
    last : "Simpson", 
    username : "example31",
    password : "example31",
    email:"example31@gmail.com"
  },
  {
    mentorMentee : "student", 
    first : "Marge", 
    last : "Simpson", 
    username : "example41",
    password : "example41",
    email:"example41@gmail.com"
  },
  {
    mentorMentee : "student", 
    first : "Lisa", 
    last : "Simpson", 
    username : "example51",
    password : "example51",
    email:"example51@gmail.com"
  },
  {
    mentorMentee : "student", 
    first : "Maggie", 
    last : "Simpson", 
    username : "example61",
    password : "example61", 
    email:"example61@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Jamie", 
    last : "Benn", 
    username : "example10",
    password : "example10", 
    email:"example10@gmail.com",
    date: new Date(Date.now())
  },
  {
    mentorMentee : "mentor", 
    first : "Tyler", 
    last : "Seguin", 
    username : "example20",
    password : "example20",
    email:"example20@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Alexander", 
    last : "Radulov", 
    username : "example30",
    password : "example30",
    email:"example30@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Radek", 
    last : "Faksa", 
    username : "example40",
    password : "example40",
    email:"example40@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Ben", 
    last : "Bishop", 
    username : "example50",
    password : "example50",
    email:"example50@gmail.com"
  },
  {
    mentorMentee : "mentor", 
    first : "Anton", 
    last : "Khudobin", 
    username : "example60",
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
