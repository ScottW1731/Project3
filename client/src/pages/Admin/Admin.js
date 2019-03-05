import React, { Component } from 'react';
import axios from 'axios';
import Login from '../../components/Login';
import Register from '../../components/Register';

import "./Admin.css";

class Admin extends Component {
    state = {
        form: "register",
        email: "",
        // userName: "",
        password: ""
    }

    handleSwitch = (e) => {
        e.preventDefault();
        this.setState({
            form: (this.state.form === "login") ? "register" : "login"
        })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    gotoTask = () => {
        this.props.history.push("/task");
    }

    componentDidMount() {
        const token = localStorage.getItem("loginToken");
        if (token) {
            console.log("trying to validate user");
            axios
                .get(
                    "/api/validateuser",
                    {
                        headers: {
                            "Authorization": "Bearer " + token
                        }
                    })
                .then((response) => {
                    console.log(response.data);
                    this.gotoTask();
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    }
    render() {
        return (
            <> {/*this is a react fragment. it is basically an empty element. we use these when we need the one wrapper element to return but we dont want to render extra elements on the page. read more about them at https://reactjs.org/docs/fragments.html*/}
                {
                    (this.state.form === "login") ?
                        <Login
                            email={this.state.email}
                            password={this.state.password}
                            handleInputChange={this.handleInputChange}
                            handleSwitch={this.handleSwitch}
                            gotoTask={this.gotoTask}
                        /> :
                        <Register
                            email={this.state.email}
                            password={this.state.password}
                            handleInputChange={this.handleInputChange}
                            handleSwitch={this.handleSwitch}
                            gotoTask={this.gotoTask}
                        />
                }
            </>
        )
    }

}

export default Admin;