import React from "react";
import "./style.css";

function Announcement(props){
    return(
        <div className = "announcement">
            <div className="announcement-button uk-text-center" uk-toggle="target: #announcement-modal">Click here for your upcoming election information</div>
            
            <div id = "announcement-modal" uk-modal = "true">
                <div className="uk-modal-dialog uk-modal-body">
                    <div className = "announcement-content">
                        <h2 className="uk-modal-title">{props.town}</h2>
                        <p>{props.date}</p>
                        <a href = {props.pollingurl} target="_blank"> {props.pollingLocation}</a>
                        <p className="uk-text-center">
                            <a className="uk-button uk-modal-close announcement-content-btn" type="button">Close</a>
                            <a className="uk-button announcement-content-btn" href = {`https://`+ props.infoUrl} type="button" target="_blank">Learn More</a>
                        </p>
                    </div>
                </div> 
            </div>        
        </div>
    )
}

export default Announcement