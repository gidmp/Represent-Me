import React from "react";
import "./style.css";

function Background(props){
    return(
        <div className = "background-img" style = {{backgroundImage: `url(${props.image})`}}>
            {props.children}
        </div>
    )
}

export default Background