import React from "react";
// import LandingPage from "../pages/LandingPage";
// import Navbar from "react-bootstrap/Navbar";
import "./Nav.scss"

class Nav extends React.Component {
    render(){
        return(
            
            <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar fixed-top">
          
              
              <a className="navbar-brand" id="navbar" href="/">Keep Going</a>
          
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          
              
              <div className="collapse navbar-collapse" id="basicExampleNav">
          
                
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Home
                        <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="nav-insp" href="Admin1">Inspired</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="nav-about" href="/Admin2">About Us</a>
                  </li>
                </ul>
                
              </div>
              
          
            </nav>
            
        )
    }
}
export default Nav;