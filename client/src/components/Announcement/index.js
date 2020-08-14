import React from "react";
import "./style.css";

function Announcement(props){
    return(
        <div className = "announcement">
            <div className="announcement-button uk-text-center" uk-toggle="target: #announcement-modal">Election Day</div>
            
            <div id = "announcement-modal" uk-modal = "true">
                <div className="uk-modal-dialog uk-modal-body">
                    <div className = "announcement-content">
                        <h2 className="uk-modal-title"> Election Day is coming near {props.town}</h2>
                        <p>The fate of this country is in your hands.</p>
                        <p>The 2020 United States Presidential election is scheduled scheduled for {props.date}</p>
                        <p>your nearest polling location : {props.pollingLocation}</p>
                        <p className="uk-text-center">
                            <a className="uk-button uk-modal-close announcement-content-btn" type="button">Close</a>
                            <a className="uk-button announcement-content-btn" href = {props.infoUrl} type="button" target="_blank">Learn More</a>
                        </p>
                    </div>
                </div> 
            </div>        
        </div>
    )
}

export default Announcement