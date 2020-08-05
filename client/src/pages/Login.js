import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/background1.jpg";
import LogIn from "../components/LogIn";


function Login (){
    return(
        <Background image = {imageLink}>
            <Nav />
            <LogIn />
        </Background>
    )
}

export default Login;