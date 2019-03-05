import React, { Component } from 'react';
import axios from 'axios';
// import Form from './Form';


class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();

        axios //try hitting our login route
            .post("api/user/login", {
                // email: this.props.email,
                userName: this.props.userName,
                password: this.props.password,
                mentorMentee: this.props.mentorMentee
            })
            .then((response) => {
                // console.log(response.data.mentorMentee);
                localStorage.setItem("loginToken", response.data.token)
                if (response.data.mentorMentee === "student") {
                    this.props.gotoTask()
                } else {
                    this.props.gotoMentor();
                }
            })
            .catch((error) => {
                console.error(error); //failure...?
            });
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-2 offset-sm-5">
                        <h1 >Log In!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 offset-sm-4">
                        <form> {/*we are passing on email, password, and handleInputChange on down the line*/}
                            <div className="form-group">
                                {/* username */}
                                <label className="labels" htmlFor="exampleInputUserName">Username</label>
                                <input onChange={this.props.handleInputChange} name="userName" value={this.props.userName} type="userName" className="form-control" id="exampleInputUserName1" aria-describedby="userNameHelp" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input onChange={this.props.handleInputChange} name="password" value={this.props.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" onClick={this.handleLogin} className="btn btn-primary">Submit</button>
                            <button onClick={this.props.handleSwitch} className="btn btn-success">Register!</button>
                            {/* <Form
                                email={this.props.email}
                                userName={this.props.userName}
                                password={this.props.password} handleInputChange={this.props.handleInputChange} /> */}
                            {/*toggle back to login menu*/}
                        </form>
                    </div>
                </div>
            </>
        )
    }

}

export default Login;