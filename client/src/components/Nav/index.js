/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/RepresentMeLogo.png"

function Nav(props) {
    return (
        <div className="uk-position-relative">
            <div className="uk-position-top">
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                    <div className="uk-navbar-left">
                        <img id="mugshot" src={Logo} alt="Me" style={{ width: 300 }} />
                    </div>

                    <div className="uk-navbar-center">
                        <a className="uk-navbar-item uk-logo" href="#">{props.pageTitle}</a>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/landingpage">Representative</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <a className="hamburger-menu uk-hidden@m" href="#mobileNav" uk-toggle="target: #mobileNav"><span className="menu-icon" uk-icon="icon: menu; ratio: 1.8"></span></a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav