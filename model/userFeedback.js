const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerFeedbackSchema = new Schema({
  Rating: Number,
  EmailAddress: String,
  Name: String,
  Feedback: String,
});

module.exports = mongoose.model("CustomerFeedback", customerFeedbackSchema);
