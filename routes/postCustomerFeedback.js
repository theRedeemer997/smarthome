const feedback = require("../model/userFeedback");

const postCustomerFeedback = async (req, res) => {
  const { rating, userEmailAddress, customerUserName, customerFeedback } =
    req.body;
  const feeback = new feedback({
    Rating: rating,
    EmailAddress: userEmailAddress,
    Name: customerUserName,
    Feedback: customerFeedback,
  });
  await feeback.save();
  res.redirect("/");
};

module.exports = postCustomerFeedback;
