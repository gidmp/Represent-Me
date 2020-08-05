import React from "react";
import "./style.css";

function Section3(props) {
    return (
        <div class="uk-section section-3">
            <div class="uk-container">
                <div class="uk-grid-match uk-child-width-1@m" uk-grid>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section3