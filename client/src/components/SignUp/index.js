import React from "react";
import "./style.css";

function SignUp() {
    return (
        <div>
        <form class="uk-form-stacked">
        <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Email (Username)</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-stacked-text" type="text" placeholder="Email" />
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Password</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-stacked-text" type="text" placeholder="Password" />
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Address</label>
            <div class="uk-form-controls">
                <input class="uk-input" id="form-stacked-text" type="text" placeholder="State" />
            </div>
        </div>
        </form>
        </div>
    );
}

export default SignUp;