/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import background from "../../assets/images/background/card-bg.jpg"

function Card(props){
    return(
    <div>
        <div className="uk-card uk-card-default item-card">
            <div className="uk-card-body info-container" style = {{background: `url(${background})`}}>
                <div className="uk-position-relative uk-light" tabIndex="-1" uk-slideshow="true">
                    <ul className="uk-slideshow-items">
                        <li>
                            <div className = "info-section uk-card-body" uk-grid = "true">
                                <div className = "image-container uk-card-media-left">
                                    <img className = "rep-img" src={props.image} width="100" height="80" alt={props.name} />
                                </div>
                                <div className = "info-container">
                                    <h5 className="uk-card-title rep-title">{props.title}</h5>
                                    <p className="rep-name">{props.name}</p>
                                </div>
                            </div>
                            <div className="uk-card-footer party" style = {{backgroundColor: `${props.color}`}}>
                                <p className="party-text" style = {{color: "white"}}>{props.party}</p>
                            </div>
                        </li>

                        <li>
                            <div className="uk-text-center uk-text-middle">
                                <h5 className = "rep-url">{props.url}</h5>
                                <h6 className = "rep-cphone">Contact Number:<br></br>{props.phone}</h6>
                                {props.children}
                            </div>
                        </li>
                    </ul>
                    <a className="uk-position-top-right uk-position-small uk-hidden-hover slide-btn" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
                </div>
            </div>
        </div>
    </div>

)}

export default Card;