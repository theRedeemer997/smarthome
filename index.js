require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const renderHomePage = require("./routes/renderHomePage");
const renderHeatingPage = require("./routes/renderHeatingServices");
const renderCoolingPage = require("./routes/renderCoolingServices");
const renderReferigerationPage = require("./routes/renderRefrigerationServices");
const renderGasPage = require("./routes/renderGasServices");
// const sendSMS = require("./routes/sendSMS");

//connect the database
const connectDB = require("./connectMongo");
const renderPurifierServices = require("./routes/renderPurifierServices");
const postCustomerFeedback = require("./routes/postCustomerFeedback");

connectDB();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//public
app.use(express.static(path.join(__dirname, "public")));

//views
app.set("views", __dirname + "/views");

//set ejs as the default templating engine
app.set("view engine", "ejs");

//route to render the home page with testimonials if there
app.get("/", renderHomePage);

//route to render the services - heating
app.get("/services/heating", renderHeatingPage);

//route to render the services - cooling
app.get("/services/cooling", renderCoolingPage);

//route to render the services - refrigeration
app.get("/services/refrigeration", renderReferigerationPage);

//route to render the services - gas
app.get("/services/gas", renderGasPage);

//route to render the services - purifier
app.get("/services/purifier", renderPurifierServices);

//route to send sms
// app.post("/callService", sendSMS);

//route to save customer feeback
app.post("/action/saveFeedback", postCustomerFeedback);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
