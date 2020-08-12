import React from "react";
import "./style.css";

function NewsContainer(props) {
  return (
    <div className="uk-container news-container">
      <div className="uk-grid-match uk-child-width-1-2@m" uk-grid="true">
        <div
          className="uk-text-center page-title"
          style={{
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <h1 className="text">{props.state} Election News</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default NewsContainer;
