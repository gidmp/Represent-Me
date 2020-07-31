import React from "react";
import "./style.css";

function Background(props){
    return(
        <div className = "background-img" uk-parallax="bgy: -200" style = {{backgroundImage: `url(${props.image})`}}>
            {props.children}
        </div>
    )
}

export default Background