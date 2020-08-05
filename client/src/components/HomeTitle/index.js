import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomeTitle(){
    return(
    <div className="uk-text-center home-title">
        {/* <h1 className = "title">Represent Me</h1> */}
        <p uk-margin = "true">
            <Link to = "/login"><button className="uk-button uk-button-primary uk-button-large home-btn">Login</button></Link>
            <Link to = "/signup"><button className="uk-button uk-button-primary uk-button-large home-btn">Sign Up</button></Link>
        </p>        
    </div>
    )
}
export default HomeTitle;