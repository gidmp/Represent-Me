import React from "react";

function Section(props) {
    return (
        <div className="uk-section">
            <div className="uk-container">
                <div className="uk-grid-match uk-child-width-1-3@m" uk-grid = "true">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section