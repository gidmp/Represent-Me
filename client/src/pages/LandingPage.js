import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/background1.jpg";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import PageTitle from "../components/PageTitle";
// import Card from "../components/Card"

function LandingPage() {
  const [fedReps, setFedReps] = useState({
    senator: {},
    rep1: {},
    rep2: {},
  });
  const [stateReps, setStateReps] = useState({
    governor: {},
  });
  // TESTING API CALLS
  useEffect(() => {
    var address = "4800 Phinney Ave N Seattle WA 98103";
    API.getRepresentatives(address)
      .then((res) => {
        console.log(res);
        setFedReps({
          senator: res.data.officials[1],
          rep1: res.data.officials[2],
          rep2: res.data.officials[3],
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
        title={fedReps.senator.name}
        description="These are your representative "
        paddingTop={140}
        paddingBottom={70}
      />
      <CardContainer></CardContainer>
    </Background>
  );
}

export default LandingPage;
