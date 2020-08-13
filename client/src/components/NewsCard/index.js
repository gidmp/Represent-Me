import React from "react";
import "./style.css";

function NewsCard(props) {
  return (
    <div className="news-card uk-card uk-padding-remove-left uk-card-default">
      <div className="uk-card-media-top">
        <img className="article-img" src={props.image} alt={props.title} />
      </div>
      <div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.url} className="uk-button uk-button-text">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
