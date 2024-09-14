const userFeedback = require("../model/userFeedback");

const renderHomePage = async (req, res) => {
  const feedback = await userFeedback.find();
  // console.log(feedback[0].Name);
  res.render("index", { feedback });
};

module.exports = renderHomePage;
