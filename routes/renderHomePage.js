const userFeedback = require("../model/userFeedback");
const featureSwitch = require("../model/featureSwitch");

const renderHomePage = async (req, res) => {
  const feedback = await userFeedback.find();
  const fS = await featureSwitch.find();
  let sw = fS[0].featureSwitchName;
  let sumOfAllFeedbacks = 0;
  for (let i = 0; i < feedback.length; i++) {
    sumOfAllFeedbacks = sumOfAllFeedbacks + feedback[i].Rating;
  }
  let avgOfAllFeedbacks = Number(
    Math.ceil(sumOfAllFeedbacks / feedback.length)
  );

  let noOfCustomer = feedback.length;

  // console.log(feedback[0].Name);
  console.log("sw>>", sw);
  res.render("index", { feedback, avgOfAllFeedbacks, noOfCustomer, sw });
};

module.exports = renderHomePage;
