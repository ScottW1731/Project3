import React, { Component } from "react";
import axios from 'axios';
import Calendar from "../components/calendar";





class Mentor extends Component {

    handleLogout = (e) => {
        //removes token from localStorage, effectively logging user out, then redirects back go login page
        e.preventDefault();
        localStorage.removeItem("loginToken");
        this.props.history.push("/");

    }

    componentDidMount() {
        const token = localStorage.getItem("loginToken"); //retrieve token from localStorage
        if (!token) { //if token doesnt exist, redirect back to home
            this.props.history.push("/");
        } else { //otherwise try and hit user validation route
            axios
                .get(
                    "/api/validateuser",
                    {
                        headers: {
                            "Authorization": "Bearer " + token
                        }
                    })
                .then((response) => {
                    console.log(response.data); //on success, do nothing
                })
                .catch((error) => {
                    console.error(error); //otherwise redirect back to home page.
                    this.props.history.push("/");
                })
        }
    }

    loadStudents = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <h1>Mentor page</h1>
                <div className="jumbotron"><Calendar/></div>
                <button className="btn-lg btn-primary" onClick={this.handleLogout}>Log Out!</button>
                <div>
                    <button className="btn-lg btn-primary" onClick={this.loadStudents}>Add Students</button>
                    <div id="studentDiv"></div>
                </div>
            </div>
        )
    }
};

export default Mentor;