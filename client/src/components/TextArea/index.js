import React from "react";
import "./style.css";

function TextArea() {
    return (
        <div className="uk-container">
            <div className = "about-text">
                <h3 className="uk-card-title">About Us</h3>
                <p>Thank you so much for using and supporting TinyLearn! In these uncertain times, we hope that
                TinyLearn can provide a peaceful but useful moment in your day. Take some time to learn
                about something new. Maybe you're bored. Maybe you want to be inspired. Maybe you're just
                curious! Whatever the reason, TinyLearn is here to make a big impact.
                Created by <a href="https://github.com/bmaha2">Bipin Maharjan</a>, <a href="https://github.com/julieritz">Julie Ritz</a>, <a href="https://github.com/grantnsmith">Grant Smith</a> and <a href="https://github.com/gidmp">Daniel Luke Tanoeihusada</a>.
                </p>
            </div>
        </div>
    );
}

export default TextArea;