import React from "react";
import "./style.css";

function NewsContainer(props) {
  return (
    <div className="uk-container news-container">
      <div
        className="uk-grid-match uk-child-width-1-2@m"
        uk-grid="true"
        uk-scrollspy="target: .uk-card; cls: uk-animation-fade; delay: 300"
      >
        {props.children}
      </div>
    </div>
  );
}

export default NewsContainer;
