import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/background1.jpg";
import SignUp from "../components/SignUp"


function Signup (){
    return(
        <Background image = {imageLink}>
            <Nav />
            <SignUp />
        </Background>
    )
}

export default Signup;