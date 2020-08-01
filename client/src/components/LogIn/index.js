import React from "react";
import "./style.css";

function LogIn() {
    return (
        <div>
        <form class="uk-form-stacked">
        <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Email (Username) </label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-stacked-text" type="text" placeholder="Username" />
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Password</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-stacked-text" type="text" placeholder="Password" />
            </div>
        </div>
        </form>
        </div>
    );
}

export default LogIn;