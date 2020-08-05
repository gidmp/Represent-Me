import React from "react";
import "./style.css";

function Section1(props) {
    return (
        <div class="uk-section section-1">
            <div class="uk-container">
                <div class="uk-grid-match uk-child-width-1@m" uk-grid>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section1