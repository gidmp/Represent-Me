import React from "react";
import "./style.css";

function CardContainer(props) {
    return (
        <div className="uk-container card-container">
            <div className="uk-grid-match uk-child-width-1-3@m" uk-grid = "true">
                {props.children}
            </div>
        </div>
    )
};

export default CardContainer;