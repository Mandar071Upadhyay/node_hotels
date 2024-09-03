const mongoose = require("mongoose");
const mongodbURL = "mongodb://localhost:27017/hotels";
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
