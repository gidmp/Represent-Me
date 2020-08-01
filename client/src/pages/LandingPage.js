import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/background1.jpg";
import API from "../utils/API";

function LandingPage() {
  // TESTING API CALLS
  useEffect(() => {
    var state = "NY";
    API.getLegislatorsCID(state)
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        var address = "93950";
        API.getRepresentatives(address).then((res) => {
          console.log(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // END TESTING API CALLS
  return (
    <Background image={imageLink}>
      <Nav />
        <h3 className="uk-card-title">Landing Page</h3>
    </Background>
  );
}

export default LandingPage;
