import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
class Register extends Component {

    handleRegister = (e) => {
        e.preventDefault();
        axios //trying to create a new user
            .post("/api/user/new", {
                email: this.props.email,
                password: this.props.password
            })
            .then((response) => {
                console.log(response.data); //on success, set loginToken in localStorage and go to dashboard
                localStorage.setItem("loginToken", response.data.token)
                this.props.gotoDash()
            })
            .catch((error) => {
                console.error(error); //failed for some reason...?
            })
    }

    render() {
        return (
            <>
            <div className="row">
                <div className="col-sm-2 offset-sm-5">
                    <h1 >Register!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 offset-sm-4">
                <form>
                    {/*we are passing on email, password, and handleInputChange on down the line*/}
                    <Form email={this.props.email} password={this.props.password} handleInputChange={this.props.handleInputChange}/>

                    <button type="submit" onClick={this.handleRegister} className="btn btn-primary">Submit</button>
                    <button onClick={this.props.handleSwitch} className="btn btn-default">Login!</button> {/*toggle back to login menu*/}
                </form>
                </div>
            </div>
            </>
        )
    }

}

export default Register;