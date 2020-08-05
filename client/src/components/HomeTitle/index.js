import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {Link, useLocation} from "react-router-dom";



function HomeTitle(){
    const location = useLocation();
    return(
    <div className="uk-text-center home-title">

        <h1 className = "title">Represent Me</h1>
        <p>Lorem ipsum...</p>
        <p uk-margin>
            <button className="uk-button uk-button-default uk-button-large home-btn"><Link  className={location.pathname === "/Login"}to = "/Login">Login</Link></button>
            <button className="uk-button uk-button-primary uk-button-large home-btn"><Link className={location.pathname === "/SignUp"} to = "/Signup">Sign Up</Link></button>

        </p>        
    </div>
    )
}

export default HomeTitle;