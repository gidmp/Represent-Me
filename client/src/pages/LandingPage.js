import React from "react";
import Nav from "../components/Nav";
import TextArea from "../components/TextArea";
import Background from "../components/Background";
import imageLink from "../assets/images/background/background1.jpg";


function LandingPage (){
    return(
        <Background image = {imageLink}>
            <Nav />
            <TextArea>
                <h3 className="uk-card-title">Landing Page</h3>
            </TextArea>
        </Background>
    )
}

export default LandingPage;