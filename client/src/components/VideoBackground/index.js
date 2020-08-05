import React from "react";
import "./style.css";

function Background(props){
    return(
        <div className = "video-container">
            <video autoPlay muted loop id="video">
                <source src={props.video} type="video/mp4" />
            </video>
            {props.children};
        </div>
    )
}

export default Background