import React from "react";
import "./style.css";

function NewsTitle(props) {
  return (
    <div
      className="uk-text-center news-title"
      style={{
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <h1 className="text">{props.state} Election News</h1>
    </div>
  );
}
export default NewsTitle;
