import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/background1.jpg";


function LandingPage (){
    return(
        <Background image = {imageLink}>
            <Nav />
        </Background>
    )
}

export default LandingPage;