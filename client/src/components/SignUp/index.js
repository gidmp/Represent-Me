import React, { Component } from "react";
import "./style.css";
import axios from "axios";


class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            location: '',
            zipcode: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/api/signup/', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            location: this.state.location,
            zipcode: this.state.zipcode
        })
            .then(response => {
                
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.props.history.push("/Login")
                    }
                
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }
    render() {
        return (
            <div className="uk-container uk-container-xsmall" >
                <form className="uk-form-stacked">
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">Username</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="Username" name = "username" value={this.state.username} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">Email</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="Email" name = "email"value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">Password</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="Password" name = "password"value={this.state.password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">State</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="State" name = "location"value={this.state.location} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">zipcode</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="zipcode" name = "zipcode" value={this.state.zipcode} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button className="uk-button uk-button-primary" onClick={this.handleSubmit}
                        type="submit">Submit</button>
                </form>
            </div>
        )
    };
}

export default SignUp;