import React from "react";
import "./style.css";

function NewsCard(props) {
  return (
    <div
      className="news-card uk-card uk-card-default uk-grid-collapse uk-width-1-1 uk-margin"
      uk-grid="true"
    >
      <div className="uk-card-media-left uk-cover-container">
        <img
          className="article-img"
          src={props.image}
          alt={props.title}
          uk-cover="true"
        />
        <canvas width="600" height="400"></canvas>
      </div>
      <div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.url} class="uk-button uk-button-text">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
