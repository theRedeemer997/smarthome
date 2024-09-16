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
  if (
    rating !== 0 &&
    userEmailAddress.length !== 0 &&
    customerUserName.length !== 0 &&
    customerFeedback.length !== 0
  ) {
    console.log(
      "🚀 ~ postCustomerFeedback ~ :",
      "saving to customer feedback collection"
    );
    await feeback.save();
    res.redirect("/");
  } else {
    res.redirect("/");
    console.log("🚀 ~ postCustomerFeedback ~ :", "missing fields");
  }
};

module.exports = postCustomerFeedback;
