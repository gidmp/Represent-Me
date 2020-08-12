import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/flagprojection.jpg";
import SignUp from "../components/SignUp"
import Container from "../components/Container";


function Signup (){
    return(
        <Background image = {imageLink}>
            <Nav />
            <Container>
            <SignUp />
            </Container>
        </Background>
    )
}

export default Signup;