import React from "react";
import "./style.css";

function Section2(props) {
    return (
        <div class="uk-section section-2">
            <div class="uk-container">
                <div class="uk-grid-match uk-child-width-1@m" uk-grid>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section2