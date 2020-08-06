import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/flagflowgirl.jpg";
import LogIn from "../components/LogIn";
import Container from "../components/Container";

function Login (){
    return(
        <Background image = {imageLink}>
            <Nav />
            <Container>
            <LogIn />
            </Container>
        </Background>
    )
}

export default Login;