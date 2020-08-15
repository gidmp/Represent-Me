import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/flagbg.jpg";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import SocialMedia from "../components/SocialMedia";
import LoginMessage from "../components/LoginMessage";
import NewsContainer from "../components/NewsContainer";
import NewsCard from "../components/NewsCard";
import NewsTitle from "../components/NewsTitle";
import placeholderPerson from "../assets/images/placeholder/placeholder-person.jpg";
import axios from "axios";

function LandingPage() {
  const [representatives, setReps] = useState({
    officials: [],
    loading: false
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
  const [currentUser, setCurrentUser] = useState({
    email: "",
    address: "",
    state: "",
    zipcode: "",
  });

  useEffect(() => {
    axios
      .get("/api/user_data")
      .then((res) => {
        setCurrentUser({
          email: res.data.email,
          address: res.data.address,
          state: res.data.state,
          zipcode: res.data.zipcode,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setReps({ loading: true, officials: [] })
    var address = `${currentUser.address} ${currentUser.state} ${currentUser.zipcode}`;
    var state = `${currentUser.state}`;
    API.getRepresentatives(address)
      .then((res) => {
        setReps({
          officials: res.data.officials,
          loading: false
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
  }, [currentUser, setReps]);

  return (
    <div>
      <Background image={imageLink}>
        <Nav />
        {representatives.officials.length === 0 ? (
          <LoginMessage />
        ) : (
            <PageTitle
              title="Your Representatives"
              description="These are your elected representatives at both the state and federal level."
              paddingTop={140}
              paddingBottom={70}
            />
          )}
        {representatives.loading ?
          "Loading..." :
          <CardContainer>
            {representatives.officials.slice(1).map((i, id) => {
              const title = [
                "U.S. Senator",
                "U.S. Senator",
                "U.S. Representative",
                "Governor",
                "State Senator",
                "State Representative",
                "State Representative",
              ];
              const photoUrl = i.photoUrl;
              const socialArr = i.channels || [];

              return (
                <Card
                  title={title[id]}
                  image={photoUrl ? photoUrl : placeholderPerson}
                  name={i.name}
                  url={i.urls}
                  phone={i.phones}
                  party={i.party}
                  color={i.party === "Republican Party" ? "red" : "blue"}
                  key={id}
                >
                  {socialArr &&
                    socialArr.map((j, id) => {
                      return (
                        <SocialMedia media={j.type} mediaId={j.id} key={id} />
                      );
                    })}
                </Card>
              );
            })}
          </CardContainer>
        }
      </Background>
      <div>
        {representatives.officials.length > 0 && (
          <React.Fragment>
            <NewsTitle state={currentUser.state} />
            <NewsContainer>
              {news.articles.map((i, id) => {
                return (
                  <NewsCard
                    title={i.title}
                    image={i.image}
                    source={i.source.name}
                    url={i.url}
                    description={i.description}
                    date={i.publishedAt}
                    key={id}
                  />
                );
              })}
            </NewsContainer>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
