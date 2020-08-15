import React from "react";
import "./style.css";

function Background2(props){
    return(
        <div className= "background-img-2" style = {{backgroundImage: `url(${props.image})`}}>
            {props.children}
        </div>
    )
}

export default Background2