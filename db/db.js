const mongoose = require("mongoose");
require("dotenv").config();
const mongodbURL = "mongodb://localhost:27017/hotels";
//const mongodbURL="mongodb+srv://mandarupadhyay12345:xVrzzD3aUHScn5Qk@cluster0.c2z98.mongodb.net/hotels?retryWrites=true&w=majority&appName=Cluster0";
//const mongodbURL=process.env.DB_URL;

mongoose.connect(mongodbURL);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("connected sucessfully !!");
});
db.on("error", (error) => {
  console.log("error", error);
});
db.on("disconnected", () => {
  console.log("disconnected !!");
});
module.exports = db;
