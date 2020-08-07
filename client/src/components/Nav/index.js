/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/RepresentMeLogo.png"

function Nav(props){
    return(
        <div className="uk-position-relative">
            <div className="uk-position-top">
                <nav className="uk-navbar-container" uk-navbar = "true">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to = "/landingpage">My Representatives</Link></li>
                            <li><Link to = "/education">Learn</Link></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-center">
                        <Link to = "/"><img id = "mugshot" src={Logo} alt="Represent Me" style={{ width: 300 }} /></Link>
                        {/* <a className="uk-navbar-item uk-logo" href="#">{props.pageTitle}</a> */}
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to = "/about">About</Link></li>
                            <li><Link to = "/login">Login</Link></li>
                            <li><Link to = "/">Logout</Link></li>
                        </ul>
                        <a className="hamburger-menu uk-hidden@m" href="#mobileNav" uk-toggle="target: #mobileNav"><span className="menu-icon"uk-icon="icon: menu; ratio: 1.8"></span></a>
                    </div>
                </nav>
            </div>
        </div>    
    )
}

export default Nav