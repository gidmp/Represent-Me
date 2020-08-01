const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
//const routes = require("./routes/api-routes");
const app = express();
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");


const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(
  session({ secret: "super secret 12345", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
//app.use(routes);

require("./routes/api-routes")(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/UserDb", () => {
  console.log(`Succcessfully Connected to Db`);
});
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
