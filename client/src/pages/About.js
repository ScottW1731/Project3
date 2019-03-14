import React from "react";
import Nav from "../components/Nav"

import Carousel from "../../src/components/carousel"

class About extends React.Component {
  render() {
    return(
    <div className="container">
      <Nav/>
      <div className="body"><Carousel/></div>
    
    </div>
    )
  }
};
export default About;