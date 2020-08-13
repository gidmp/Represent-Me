import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import "./style.css";
import axios from "axios"; 


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validZipCodes = RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: null,
            password: null,
            email: null,
            address: null,
            location:null,
            zipcode: null,
        
        errors: {
            username: '',
            password: '',
            email: '',
            location: '',
            zipcode: '',
        }
    };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        let value = event.target.value;
        const name = event.target.name;
        let errors = this.state.errors;
        switch (name) {
            case 'username': 
              errors.username = 
                value.length < 3
                  ? 'username must be at least 3 characters long!'
                  : '';
              break;
            case 'email': 
              errors.email = 
                validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
              break;
            case 'password': 
              errors.password = 
                value.length < 6
                  ? 'Password must be at least 6 characters long!'
                  : '';
              break;
              case 'zipcode': 
              errors.zipcode = 
                validZipCodes.test(value)
                  ? ''
                  : 'Zipcode is not valid!';
              break;
              case 'location': 
              errors.location = 
                value.length < 3
                  ? 'Please enter the full name of the state'
                  : '';
              break;
            default:
              break;
          }


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
            address: this.state.address,
            location: this.state.location,
            zipcode: this.state.zipcode
        })
            .then(response => {
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.props.history.push("/login")
                    }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)
            })
            if(validateForm(this.state.errors)) {
                console.info('Valid Form')
              }else{
                console.error('Invalid Form')
              }
            
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="uk-container uk-overlay-default" >
                <form onSubmit={this.handleSubmit} noValidate className="uk-form-stacked">
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">Username</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="Username" name = "username" value={this.state.username} onChange={this.handleChange} noValidate/>
                            {errors.username.length > 0 && 
                <span className='error'>{errors.username}</span>}
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">Email</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="email" placeholder="Email" name = "email"value={this.state.email} onChange={this.handleChange} noValidate/>
                            {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">Password</label>
                        <div className="uk-form-controls uk-form-password">
                            <input className="uk-input" id="form-stacked-text" type="password" placeholder="Password" name = "password"value={this.state.password} onChange={this.handleChange} noValidate/>
                            {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">Address</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="Address" name = "address"value={this.state.address} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">State</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="State" name = "location"value={this.state.location} onChange={this.handleChange} noValidate/>
                            {errors.location.length > 0 && 
                <span className='error'>{errors.location}</span>}
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-stacked-text">Zipcode</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="form-stacked-text" type="text" placeholder="Zipcode" name = "zipcode" value={this.state.zipcode} onChange={this.handleChange} noValidate/>
                            {errors.zipcode.length > 0 && 
                <span className='error'>{errors.zipcode}</span>}
                        </div>
                    </div>
                    <button className="uk-button uk-button-primary">Submit</button>
                </form>
            </div>
        )
    };
}
export default withRouter(SignUp);