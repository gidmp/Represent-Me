import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function VoteButton(){
    return(
        <div>
        <Link to="https://vote.gov/"><button className="uk-button uk-button-default uk-button-large uk-align-center">Register to Vote</button></Link>
        </div>    
    )    
}
export default VoteButton;