/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import background from "../../assets/images/background/card-bg.jpg"

function Card(props){
    return(
    // <div className="item-card">
    //     <div className="uk-card uk-card-default">
    //         <div className="uk-card-media-top">
    //             <h2>{props.title}</h2>
    //             <img src={props.image} alt={props.name} />
    //         </div>
    //         <div className="uk-card-body">
    //             <h3 className="uk-card-title">{props.name}</h3>
    //             <p>{props.description}</p>
    //             <div uk-margin = 'true' className = "uk-text-center">
    //                 <a className="uk-button uk-button-default card-btn" href= {props.link} target= "_blank">View details</a>
    //             </div>                    
    //         </div>
    //     </div>
    // </div>    
    // <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    //     <div className="uk-card-media-left uk-cover-container">
    //         <img src ={props.image} alt={props.name} uk-cover = "true" />
    //         <canvas width="300" height="200"></canvas>
    //     </div>
    //     <div>
    //         <div className="uk-card-body">
    //             <h3 className="uk-card-title">{props.name}</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    //             <div uk-margin = 'true' className = "uk-text-center">
    //                 <a className="uk-button uk-button-default card-btn" href= {props.link} target= "_blank">View details</a>
    //             </div>                    
    //         </div>
    //     </div>    
    // </div>
    <div>
        <div className="uk-card uk-card-default item-card">
            <div className="uk-card-body info-container" style = {{background: `url(${background})`}}>
                <div className="uk-position-relative uk-light" tabIndex="-1" uk-slideshow="true">
                    <ul className="uk-slideshow-items">
                        <li>
                            <div className = "info-section" uk-grid = "true">
                                <div className = "image-container uk-card-media-left">
                                    <img className = "rep-img" src={props.image} width="100" height="80" alt={props.name} />
                                </div>
                                <div className = "info-container">
                                    <h5 className="uk-card-title rep-title">{props.title}</h5>
                                    <p className="rep-name">{props.name}</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="uk-text-center uk-text-middle">
                                <h5 className = "rep-url">{props.url}</h5>
                                {/* <a uk-icon="icon: twitter ; ratio: 1.5" className="contact-icon contact-link-icon" href={props.twitter} target="_blank"></a>
                                <a uk-icon="icon: youtube ; ratio: 1.5" className="contact-icon contact-link-icon" href={props.youtube} target="_blank"></a>
                                <a uk-icon="icon: facebook ; ratio: 1.5" className="contact-icon contact-link-icon" href={props.facebook} target="_blank"></a> */}
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