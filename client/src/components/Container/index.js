import React from "react";
import "./style.css";

function Container(props) {
    return (
        <div className="uk-container">
            <div className="uk-grid-match uk-child-width-1-2@m" uk-grid = "true">
                {props.children}
            </div>
        </div>
    )
};

export default Container;