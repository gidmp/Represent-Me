/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MobileNavbar(){
    return(
        <div id="mobileNav" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <ul className="mobile-nav-list uk-list uk-text-center">
                    <li className = "mobile-nav-item" uk-toggle="target:#mobileNav"><Link to = "/landingPage">MY REPRESENTATIVES</Link></li>
                    <li className = "mobile-nav-item" uk-toggle="target:#mobileNav"><Link to = "/education">LEARN</Link></li>
                    <li className = "mobile-nav-item" uk-toggle="target:#mobileNav"><Link to = "/about">ABOUT</Link></li>
                    <li className = "mobile-nav-item" uk-toggle="target:#mobileNav"><Link to = "/login">LOGIN</Link></li>
                </ul>
            </div>
        </div>    
    )
}

export default MobileNavbar
