import React from "react";
import "./style.css";

function CardContainer(props) {
    return (
        <div className="uk-container card-container">
            <div className="uk-grid-match uk-child-width-1-2@m " uk-grid = "true" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300">
                {props.children}
            </div>
        </div>
    )
};

export default CardContainer;