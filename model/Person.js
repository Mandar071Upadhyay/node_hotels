const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  work: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  salary: {
    type: Number,
    require: true,
  },
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
});
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
