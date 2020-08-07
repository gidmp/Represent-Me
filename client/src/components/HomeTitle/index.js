import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function HomeTitle(){
    const location = useLocation();
    return(
<<<<<<< HEAD
    <div className="uk-text-center home-title">
        <p uk-margin = "true">
        <Link  className={location.pathname === "/login"}to = "/login"><button className="uk-button uk-button-large home-btn">Login</button></Link>
        <Link className={location.pathname === "/signUp"} to = "/signup"><button className="uk-button uk-button-large home-btn">Sign Up</button></Link>
        </p>        
    </div>
=======
        <div className="uk-text-center home-title">

            <p uk-margin = "true">
                <button className="uk-button uk-button-primary uk-button-large home-btn"><Link  className={location.pathname === "/login"}to = "/login">Login</Link></button>
                <button className="uk-button uk-button-primary uk-button-large home-btn"><Link className={location.pathname === "/signUp"} to = "/signup">Sign Up</Link></button>
            </p>        
        </div>
>>>>>>> e0657a0a02d265f3cc22c6dee646113621ae99ce
    )
}
export default HomeTitle;