import React from "react";
import "./style.css";

function HomeTitle(){
    return(
    <div className="uk-text-center home-title">
        {/* <h1 className = "title">Represent Me</h1> */}
        <p uk-margin>
            <button class="uk-button uk-button-primary uk-button-large home-btn">Login</button>
            <button class="uk-button uk-button-primary uk-button-large home-btn">Sign Up</button>
        </p>        
    </div>
    )
}

export default HomeTitle;