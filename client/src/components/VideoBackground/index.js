import React from "react";
import "./style.css";

function Background(props){
    return(
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={props.video} type="video/mp4" />
            </video>
            {props.children};
        </div>
    )
}

export default Background