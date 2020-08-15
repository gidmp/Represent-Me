import React from "react";
import "./style.css";

function PageTitle(props) {
  return (
    <div>
      <div
        className="uk-text-center title-page"
        style={{
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
        }}
      >
              {props.children}

        <h1 className="page-title-h1">{props.title}</h1>
        <p className="page-title-subheader">{props.description}</p>
      </div>
    </div>
  );
}

export default PageTitle;
