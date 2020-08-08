import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/flagbg.jpg";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card"
import placeholderPerson from "../assets/images/placeholder/placeholder-person.jpg"

function LandingPage() {
  const [representatives, setReps] = useState({
    officials: [],
  });
  const [elections, setElections] = useState({
    title: "",
    date: "",
    electionInfoURL: "",
    pollingLocationsURL: "",
  });
  const [news, setNews] = useState({
    articles: [],
  });

  useEffect(() => {
    var address = "871 Haunani Pl Wailuku Hawaii";
    var state = "California";
    API.getRepresentatives(address)
      .then((res) => {
        setReps({
          officials: res.data.officials,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    API.getVoterInfo(address)
      .then((res) => {
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
    API.getNews(state)
      .then((res) => {
        setNews({
          articles: res.data.articles,
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
            {representatives.officials.slice(1).map((i, id) => {
              {console.log(representatives.officials)}
              const title = [
                "U.S. Senator",
                "U.S. Senator",
                "U.S. Representative",
                "Governor",
                "State Senator",
                "State Representative", 
                "State Representative"
              ]
              const photoUrl = i.photoUrl
              return(
                  <Card 
                      title = {
                          title[id]
                      }
                      image = {(photoUrl) ? photoUrl: placeholderPerson}
                      name = {i.name}
                      url = {i.urls}
                      key = {id}
                  />
              )
          })}
        </CardContainer>
      </Background>

  );
}

export default LandingPage;
