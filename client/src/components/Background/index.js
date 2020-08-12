import React from "react";
import "./style.css";

function Background(props){
    return(
        <div className = "background-img uk-background-cover" style = {{backgroundImage: `url(${props.image})`}}>
            {props.children}
        </div>
    )
}

export default Background