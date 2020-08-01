/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/RepresentMeLogo.png"

function Nav() {
    return (
        <div className="uk-position-relative">
            <div className="uk-position-top">
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                    <div className="uk-navbar-center-left">
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to="/landingPage">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                        <a className="hamburger-menu uk-hidden@m" href="#mobileNav" uk-toggle="target: #mobileNav"><span className="menu-icon" uk-icon="icon: menu; ratio: 1.8"></span></a>
                    </div>
                    <div className="uk-navbar-center-right">
                        <ul className="uk-navbar-nav uk-visible@m">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        </ul>
                        <a className="hamburger-menu uk-hidden@m" href="#mobileNav" uk-toggle="target: #mobileNav"><span className="menu-icon" uk-icon="icon: menu; ratio: 1.8"></span></a>
                    </div>
                </nav>
            </div>
        </div> 
    )
}

export default Nav