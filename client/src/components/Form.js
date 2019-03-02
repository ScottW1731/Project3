import React, { Component } from 'react';
class Form extends Component {

    render() {
        return (
            <>
                <div className="form-group">
                    <label className="labels" htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={this.props.handleInputChange} name="email" value={this.props.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={this.props.handleInputChange} name="password" value={this.props.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
            </>
        )
    }

}

export default Form;