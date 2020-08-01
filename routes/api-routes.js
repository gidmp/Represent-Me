// Requiring our models and passport as we've configured it
const User = require("../models/index");
const passport = require("../config/passport");

module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,

    });
  });


  app.post("/api/signup", (req, res) => {
    const { username, password, email, location, zipcode } = req.body
    
      const newUser = new User({
        username: username,
        password: password,
        email: email,
        location: location,
        zipcode: zipcode,
      });
      const savedUser = newUser.save();
      if (savedUser) return res.redirect(307, "/api/login");
      
    

  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
