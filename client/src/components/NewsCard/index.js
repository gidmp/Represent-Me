import React from "react";
import "./style.css";

function NewsCard(props) {
  return (
    <div className="news-card uk-card uk-grid-medium">
      <div className="uk-card-media-top">
        <img
          className="article-img uk-align-center"
          src={props.image}
          width="450"
          height="100"
          alt={props.title}
        />
      </div>
      <div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.title}</h3>
          <p>{props.description}</p>
          <a
            href={props.url}
            id="read-more"
            className="uk-button uk-button-text"
            target="_blank"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
