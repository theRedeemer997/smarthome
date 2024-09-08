require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const renderHomePage = require("./routes/renderHomePage");
const renderHeatingPage = require("./routes/renderHeatingServices");

//connect the database
const connectDB = require("./connectMongo");
connectDB();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//public
app.use(express.static(path.join(__dirname, "public")));

//views
app.set("views", __dirname + "/views");

//set ejs as the default templating engine
app.set("view engine", "ejs");

//route to render the home page
app.get("/", renderHomePage);

//route to render the servies - heating
app.get("/services/heating", renderHeatingPage);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
