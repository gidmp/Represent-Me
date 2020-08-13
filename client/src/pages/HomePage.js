import React from "react";
import Nav from "../components/Nav";
import VideoBackground from "../components/VideoBackground";
import videoLink from "../assets/images/RepresentMe.mp4";
import HomeTitle from "../components/HomeTitle";

function LandingPage() {
  return (
    <VideoBackground video={videoLink}>
        <Nav />
        <HomeTitle />
    </VideoBackground>
  );
}

export default LandingPage;