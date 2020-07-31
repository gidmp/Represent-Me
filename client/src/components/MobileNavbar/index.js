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
                    <li className = "mobile-nav-item" uk-toggle="target:#mobileNav"><Link to = "/about">About Me</Link></li>
                    <li className = "mobile-nav-item" uk-toggle="target:#mobileNav"><Link to = "/portfolio">Portfolio</Link></li>
                    <li className = "mobile-nav-item" uk-toggle="target:#mobileNav"><Link to = "/contact">Contact</Link></li>
                </ul>
            </div>
        </div>    
    )
}

export default MobileNavbar
