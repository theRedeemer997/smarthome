const mongoose = require("mongoose");
const { Schema } = mongoose;

const featureSwitch = new Schema({
  featureSwitchName: String,
});

module.exports = mongoose.model("featureSwitch", featureSwitch);
