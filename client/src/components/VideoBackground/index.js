import React from "react";
import "./style.css";

function Background(props){
    return(
        <div className = "video-container">
            <video id="videoBG" autoPlay muted loop >
                <source src={props.video} type="video/mp4" />
            </video>
            {props.children};
        </div>
    )
}

export default Background