import React from "react";

function Section(props) {
    return (
        <div class="uk-section">
            <div class="uk-container">
                <div class="uk-grid-match uk-child-width-1@m" uk-grid>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section