const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoUri);
    console.log("MongoDB Connected: " + conn.connection.host);
  } catch (error) {
    console.log("connection failed", error.message);
  }
};

module.exports = connectDB;
