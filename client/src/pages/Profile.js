import React from "react";
import Nav from "../components/Nav";
import TextArea from "../components/TextArea";
import Background from "../components/Background";
import imageLink from "../assets/images/background/flagprojection.jpg";


function Profile (){
    return(
        <Background image = {imageLink}>
            <Nav />
            <TextArea>
                <h3 className="uk-card-title">Welcome to your profile, blahblahblah</h3>
            </TextArea>
        </Background>
    )
}

export default Profile;