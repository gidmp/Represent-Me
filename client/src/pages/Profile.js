import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import imageLink from "../assets/images/background/flagprojection.jpg";


function Profile (){
    return(
        <Background image = {imageLink}>
            <Nav />           
        </Background>
    )
}

export default Profile;