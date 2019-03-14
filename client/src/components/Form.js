import React, { Component } from 'react';
// import Dropdown from "../components/Dropdown";
class Form extends Component {

    render() {
        return (
            <>
                <div className="form-group">
                    {/* <label className="labels" htmlFor="exampleInputEmail1">Email address</label> */}
                    {/* <input onChange={this.props.handleInputChange} name="email" value={this.props.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
                    {/* first name */}
                    <label className="labels" htmlFor="exampleInputFirstName">First Name</label>
                    <input onChange={this.props.handleInputChange} name="firstName" value={this.props.firstName} type="firstName" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                    {/* last name */}
                    <label className="labels" htmlFor="exampleLastLastName">Last Name</label>
                    <input onChange={this.props.handleInputChange} name="lastName" value={this.props.lastName} type="lastName" className="form-control" id="exampleInputLastName1" aria-describedby="lastNameHelp" placeholder="Enter Last Name" />
                </div>
                <div className="form-group">
                    {/* username */}
                    <label className="labels" htmlFor="exampleInputUserName">Username</label>
                    <input onChange={this.props.handleInputChange} name="userName" value={this.props.userName} type="userName" className="form-control" id="exampleInputUserName1" aria-describedby="userNameHelp" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={this.props.handleInputChange} name="password" value={this.props.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    {/* <Dropdown /> */}
                    <label htmlFor="exampleInputmentorMentee1">Choose Student or Mentor:</label>
                    <select onChange={this.props.handleInputChange} name="mentorMentee" value={this.props.mentorMentee} className="button btn btn-info">
                        <option value=""></option>
                        <option name="student" value="student">Student</option>
                        <option name="mentor" value="mentor">Mentor</option>
                    </select>
                </div>
            </>
        )
    }

}

export default Form;