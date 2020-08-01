import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/background1.jpg";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import PageTitle from "../components/PageTitle";
// import Card from "../components/Card"


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
        <PageTitle 
            title = "Your representative"
            description = "These are your representative "
            paddingTop = {140}
            paddingBottom = {70}
        />
        <CardContainer>

        </CardContainer>
    </Background>
  );
}

export default LandingPage;
