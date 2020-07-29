import React from "react";

function Nav() {
    return (
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
        </ul>
    </div>
    <a href="" class="uk-navbar-item uk-logo"><img src="../public/assets/images/RepresentMeLogo.png" /></a>
    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Education</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </div>
</nav>
    );
}

export default Nav;