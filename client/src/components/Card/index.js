/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div>
      <div className="uk-card uk-card-default item-card">
        <div className="uk-card-body info-container">
          <div
            className="uk-position-relative"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <ul className="uk-slideshow-items">
              <li>
                <div className="info-section uk-grid uk-child-width-expand ">
                  <div className="image-container uk-card-media-left">
                    <img
                      className="rep-img"
                      src={props.image}
                      width="100"
                      height="80"
                      alt={props.name}
                    />
                  </div>
                  <div className="rep-name-container">
                    <h5 className="uk-card-title rep-title">{props.title}</h5>
                    <p className="rep-name">{props.name}</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="uk-text-center rep-contact">
                  <a className="rep-url" alt={props.url} href={props.url}>
                    {props.url}
                  </a>
                  <h6 className="rep-phone">
                    Contact Number:<br></br>
                    {props.phone}
                  </h6>
                  {props.children}
                </div>
              </li>
            </ul>
            <a
              className="uk-position-top-right uk-position-small uk-hidden-hover slide-btn"
              href="#"
              uk-slidenav-next="true"
              uk-slideshow-item="next"
            ></a>
          </div>
        </div>
        <div
          className="party-banner"
          style={{ backgroundColor: `${props.color}` }}
        >
          <div className="row">
            <p className="party-text" style={{ color: "white" }}>
              {props.party}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
