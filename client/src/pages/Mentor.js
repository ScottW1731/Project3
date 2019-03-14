import React, { Component } from "react";
import axios from 'axios';
import Calendar from "../components/calendar";
import "./Mentor.scss";





class Mentor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

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

        this.loadTasks();

    }

    loadStudents = () => {
        axios.get("/api/student/findAll")
            .then((response) => {
                console.log(response.data)

            })
    }

    loadTasks = () => {
        axios.get("/api/task/findAll")
            .then((response) => {
                // console.log(response.data[0].createdAt.substr(0,10))
                this.setState({ tasks: response.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Mentor page</h1>
                <div className="container">
                    <div className="jumbotron"><Calendar /></div>
                </div>
                <button className="btn-lg btn-primary" onClick={this.handleLogout}>Log Out!</button>
                {/* <div>
                    <button className="btn-lg btn-primary" onClick={this.loadStudents}>Add Students</button>

                </div> */}
                <div id="studentTaskDiv">
                    {this.state.tasks.map((task) => (
                        <ul>
                            <li key={task._id}>{task.user.firstName.toUpperCase()} | {task.taskName} | {task.category} | Completed: {task.completed.toString().toUpperCase()} | Created: {task.createdAt.substr(0, 10)}</li>
                        </ul>
                    ))}
                </div>
            </div>
        )
    }
};


export default Mentor;