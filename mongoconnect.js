const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Arwa", () => {
  console.log("connected db arwa");
});
