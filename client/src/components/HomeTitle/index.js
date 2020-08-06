import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function HomeTitle(){
    const location = useLocation();
    return(
<<<<<<< HEAD
        <div className="uk-text-center home-title">

            <p uk-margin = "true">
                <button className="uk-button uk-button-primary uk-button-large home-btn"><Link  className={location.pathname === "/login"}to = "/login">Login</Link></button>
                <button className="uk-button uk-button-primary uk-button-large home-btn"><Link className={location.pathname === "/signUp"} to = "/signup">Sign Up</Link></button>
            </p>        
        </div>
=======
    <div className="uk-text-center home-title">
        <p uk-margin = "true">
        <Link  className={location.pathname === "/login"}to = "/login"><button className="uk-button uk-button-large home-btn">Login</button></Link>
        <Link className={location.pathname === "/signUp"} to = "/signup"><button className="uk-button uk-button-large home-btn">Sign Up</button></Link>
        </p>        
    </div>
>>>>>>> 57cb73ed50281cca50a58aec03df72fb38588469
    )
}
export default HomeTitle;