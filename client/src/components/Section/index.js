import React from "react";
import "./style.css";

function Section(props) {
    return (
        <div className="uk-section section">
            <div className="uk-container">
                <div className="uk-grid-match uk-child-width-1@m" uk-grid>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section