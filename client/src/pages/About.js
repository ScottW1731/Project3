import React from "react";
import Nav from "../components/Nav"
import "../App.css"

class About extends React.Component {
  render() {
    return(
    <div>
      <Nav/>
      <div class="grid-wrapper">
        <div class="header">About Us</div>
        
        <div class="row">
        <div class="small-box">
          <div className="column">
            <div className="card mb-2" id="beau">
              <img className="card-img-top" src={require("../assets/img/image.png")}
                alt="Card image cap"/>
              <div className="card-body" >
              <h4 className="card-title">Beau "The BackEnd Beast" Simpson</h4>
              <a className="btn btn-primary" href="https://github.com/beausimpson">Github</a>
          </div>
        </div>
        </div>
        </div>
        <div class="small-box">
        <div className="column">
        <div className="card mb-2" id="chase">
          <img className="card-img-top" src={require("../assets/img/cjenkins1.png")}/>
          <div className="card-body" id="chase-card">
            <h4 className="card-title">Chase "Look at this Face" Jenkins</h4>
            <a className="btn btn-primary" href="https://github.com/cjenkins3">Github</a>
          </div>
        </div>
        </div>
        </div>
        
        
        
          <div class="small-box">
            <div className="column">
              <div className="card mb-2" id="scott">
                <img className="card-img-top" src={require("../assets/img/Screenshot (264).png")}
            alt="Card image cap"/>
            <div className="card-body" >
            <h4 className="card-title">Scott "Can't Stop" Wagner </h4>
            <a className="btn btn-primary">Github</a>
            </div>
          </div>
          </div>
         </div>
          <div class="small-box">
          <div className="column">
          <div className="card mb-2" id="byron-card">
          <img className="card-img-top" id="byron-pic" src="https://greece.greekreporter.com/files/byron-1-1068x955.jpeg"
            alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Byron "or Bryan whatever.."Roberts</h4>
            <a className="btn btn-primary" href ="https://github.com/ByronPRoberts">Github</a>
            </div>
          </div>
          </div>
          </div>
          </div>
          <div class="main-content">
            <h7>Why We Made "Keep Going"
            <br></br>
             It was during some of our own experiences Mentoring young students that it was realized that more could be done.
            <br></br>
            Sadly often Mentors are the only ones keeping their students accountable, be it with Academics or even their own personal goals.
            <br></br>
            The problem arises when Mentor and Mentee don't have the ability or time for constant personal interaction as life can be dificult and certain boundaries must be maintained
            <br></br>
            At Keep Going, We set out to create a healthy and safe way for both Mentor and Mentee to be able to interact with each other online.
           <br></br>
            By using Keep Going a certain level of accountablility can be maintained through distance and lack of interaction. </h7>
          </div>
          </div>
    
           </div>
    )
  }
};
export default About;