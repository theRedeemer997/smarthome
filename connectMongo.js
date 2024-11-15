const mongoose = require("mongoose");
const featureSwitch = require("./model/featureSwitch");
const userFeedback = require("./model/userFeedback");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoUri);
    await featureSwitch.createCollection();
    await userFeedback.createCollection();
    console.log("Collections ensured: CustomerFeedback and FeatureSwitch");
    console.log("DB connected successfully on host ",conn.connection.host)
  } catch (error) {
    console.log("connection failed", error.message);
  }
};

module.exports = connectDB;
