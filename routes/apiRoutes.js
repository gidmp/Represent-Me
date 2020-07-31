const path = require("path");
const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

// React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

router.route("/legislators/:state", (req, res) => {
  axios
    .get(
      `http://www.opensecrets.org/api/?method=getLegislators&id=${req.params.state}&apikey=${process.env.REACT_APP_OPENSECRET_API_KEY}`
    )
    .then((response) => {
      console.log(res.json(response));
    });
});

module.exports = router;
