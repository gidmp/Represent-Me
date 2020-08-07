import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/flagbg.jpg";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card"

function LandingPage() {
  const [representatives, setReps] = useState({
    senator: {},
    rep1: {},
    rep2: {},
    governor: {},
    stateSenator: {},
    stateRep1: {},
    stateRep2: {},
  });
  const [elections, setElections] = useState({
    title: "",
    date: "",
    electionInfoURL: "",
    pollingLocationsURL: "",
  });

  useEffect(() => {
    var address = "889 Upalu St Wailuku  HI  96793";
    API.getRepresentatives(address)
      .then((res) => {
        console.log(res);
        setReps({
          senator: res.data.officials[1],
          rep1: res.data.officials[2],
          rep2: res.data.officials[3],
          governor: res.data.officials[4],
          stateSenator: res.data.officials[5],
          stateRep1: res.data.officials[6],
          stateRep2: res.data.officials[7],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    API.getVoterInfo(address)
      .then((res) => {
        console.log(res);
        setElections({
          title: res.data.election.name,
          date: res.data.election.electionDay,
          electionInfoURL:
            res.data.state[0].electionAdministrationBody.electionInfoUrl,
          pollingLocationsURL:
            res.data.state[0].electionAdministrationBody
              .votingLocationFinderUrl,
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
        title="Your representatives"
        description="These are your representatives"
        paddingTop={140}
        paddingBottom={70}
      />
        <CardContainer>
            {/* <Card 
                name = {representatives.senator.name}
            /> */}
            {Object.keys(representatives).map((i, id) => (
                <Card 
                    image = {i.photoUrl}
                    name = {i.name}
                    key = {id}
                />
            ))}
        </CardContainer>

    </Background>
  );;
}

export default LandingPage;
