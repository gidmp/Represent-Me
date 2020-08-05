import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function HomeTitle(){
    const location = useLocation();
    return(
    <div className="uk-text-center home-title">
        <p uk-margin = "true">
            <button className="uk-button uk-button-primary uk-button-large home-btn"><Link  className={location.pathname === "/login"}to = "/login">Login</Link></button>
            <button className="uk-button uk-button-primary uk-button-large home-btn"><Link className={location.pathname === "/signUp"} to = "/signup">Sign Up</Link></button>
        </p>        
    </div>
    )
}

export default HomeTitle;