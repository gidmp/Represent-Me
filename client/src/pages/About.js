import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/votesign.jpg";
import Section from "../components/Section";


function About() {
    return (
        <div>
        <Nav />
        <Background image={imageLink}></Background>
            <Section>
                <h3 className="uk-card-title">About Us</h3>
                <p>
                    Thank you so much for supporting Represent Me and seeing the need for representation FOR ALL. Represent Me hopes to provide everyone with access to the internet a one-stop-shop to learn about local candidates, important policies in their area, voting dates and voter registration.
                </p>
                <p>
                    Created by: <a href="https://github.com/bmaha2">Bipin Maharjan</a> <a href="https://github.com/julieritz">Julie Ritz</a> <a href="https://github.com/grantnsmith">Grant Smith</a> <a href="https://github.com/gidmp">Daniel Luke Tanoeihusada</a>
                </p>
            </Section>
        </div>
    )
}

export default About;