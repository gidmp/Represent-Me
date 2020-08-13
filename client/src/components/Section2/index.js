import React from "react";
import "./style.css";

function Section2(props) {
    return (
        <div className="uk-section section-2">
            <div className="uk-container">
                <div className="uk-grid-match uk-child-width-1@m" uk-grid = "true">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section2