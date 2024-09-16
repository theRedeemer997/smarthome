const userFeedback = require("../model/userFeedback");

const renderHomePage = async (req, res) => {
  const feedback = await userFeedback.find();
  let sumOfAllFeedbacks = 0;
  for (let i = 0; i < feedback.length; i++) {
    sumOfAllFeedbacks = sumOfAllFeedbacks + feedback[i].Rating;
  }
  let avgOfAllFeedbacks = Number(
    Math.ceil(sumOfAllFeedbacks / feedback.length)
  );

  let noOfCustomer = feedback.length;

  // console.log(feedback[0].Name);
  res.render("index", { feedback, avgOfAllFeedbacks, noOfCustomer });
};

module.exports = renderHomePage;
