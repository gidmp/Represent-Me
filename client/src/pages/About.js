import React from "react";
import Nav from "../components/Nav";
import TextArea from "../components/TextArea";
import Background from "../components/Background";
import imageLink from "../assets/images/background/background1.jpg";


function About (){
    return(
        <Background image = {imageLink}>
            <Nav />
            <TextArea>
                <h3 className="uk-card-title">About Us</h3>
                <p>
                    Thank you so much for supporting Represent Me, and for seeing the need for representation for all. Represent Me hopes to provide everyone with access to the internet a one-stop-shop to learn about local candidates, important policies in their area, voting dates and helping them register to vote.
                    Created by <a href="https://github.com/bmaha2">Bipin Maharjan</a>, <a href="https://github.com/julieritz">Julie Ritz</a>, <a href="https://github.com/grantnsmith">Grant Smith</a> and <a href="https://github.com/gidmp">Daniel Luke Tanoeihusada</a>.  
                </p>
            </TextArea>
        </Background>
    )
}

export default About;