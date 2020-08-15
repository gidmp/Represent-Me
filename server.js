const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "super secret 12345",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/api-routes")(app);

//Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://representme:representme1@ds161134.mlab.com:61134/heroku_5c2p6rg9",
  () => {
    console.log(`Succcessfully Connected to Db`);
  }
);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://representme:representme1@ds161134.mlab.com:61134/heroku_5c2p6rg9",
  () => {
    console.log(`Succcessfully Connected to Db`);
  }
);

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/UserDb",
//   () => {
//     console.log(`Succcessfully Connected to Db`);
//   }
// );

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
