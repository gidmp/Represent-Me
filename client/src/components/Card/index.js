/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

function Card(props){
    return(
    <div className="item-card">
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{props.name}</h3>
                <p>{props.description}</p>
                <div uk-margin = 'true' className = "uk-text-center">
                    <a className="uk-button uk-button-default card-btn" href= {props.link} target= "_blank">View details</a>
                </div>                    
            </div>
        </div>
    </div>    
)}

export default Card;