/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/images/RepresentMeLogo.png"
import axios from "axios";


function Nav(props) {
    const handleSignOut = () => {
        axios.get("/logout")
            .then(res => {
                if (res.status === 200) {
                    props.history.push("/")
                }
                return res.data;
            })
            .catch(err => {
                console.log("Error signing out", err);
            })
    }

    return (
        <div className="uk-position-relative">
            <div className="uk-position-top">
                <nav className="uk-navbar-container" uk-navbar="true">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to="/landingPage">My Representatives</Link></li>
                            <li><Link to="/education">Learn</Link></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-center">
                        <Link to="/"><img id="mugshot" src={Logo} alt="Represent Me" style={{ width: 300 }} /></Link>
                        {/* <a className="uk-navbar-item uk-logo" href="#">{props.pageTitle}</a> */}
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li>
                            <Link to="/landingPage">Account</Link>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><Link to="/login">Login</Link></li>
                                            <li><a onClick={handleSignOut}>Logout</a></li>
                                        </ul>
                                    </div>
                            </li>
                        </ul>
                        <a className="hamburger-menu uk-hidden@m" href="#mobileNav" uk-toggle="target: #mobileNav"><span className="menu-icon" uk-icon="icon: menu; ratio: 1.8"></span></a>
                    </div>
                </nav>
            </div>
        </div>
    )

}

export default withRouter(Nav);