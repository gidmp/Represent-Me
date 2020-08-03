import React from "react";
import Nav from "../components/Nav";
import VideoBackground from "../components/VideoBackground";
import videoLink from "../assets/images/RepresentMe.mp4";
// import CardContainer from "../components/CardContainer";
import HomeTitle from "../components/HomeTitle";
// import Card from "../components/Card"


function LandingPage() {
  return (
    <VideoBackground video={videoLink}>
        <Nav />
        <HomeTitle />
    </VideoBackground>
  );
}

export default LandingPage;
