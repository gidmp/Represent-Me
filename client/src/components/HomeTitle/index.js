import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function HomeTitle(){
    const location = useLocation();
    return(
    <div className="uk-text-center home-title">
        <p uk-margin = "true">
        <Link  className={location.pathname === "/login"}to = "/login"><button className="uk-button uk-button-large home-btn">Login</button></Link>
        <Link className={location.pathname === "/signUp"} to = "/signup"><button className="uk-button uk-button-large home-btn">Sign Up</button></Link>
        </p>        
    </div>
    )
}

export default HomeTitle;