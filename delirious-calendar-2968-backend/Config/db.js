// THIS FILE IS CONNECT THE MONGODB TO OUR LOCAL SYSTEM. DO NOT MAKE ANY CHANGES

const mongoose = require("mongoose");
require("dotenv").config();

const connectToServer = async () => {
  await mongoose.connect(
    "mongodb+srv://pokharelriket777:pokharel7@hms-mern.cy0qvhk.mongodb.net/pet"
  );

  console.log("server is running");
};

module.exports = connectToServer;
