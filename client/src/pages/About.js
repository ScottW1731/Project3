import React from "react";
// react component for creating beautiful carousel
// import Slider from "react-slick";
// material-ui components
// @material-ui/icons
// core components
// import Grid from "@material-ui/core/Grid";

// import Card from "@material-ui/core/Card";


// import image1 from "../assets/img/George4.jpg"
// import image2 from "../assets/img/George5.jpg";
// import image3 from "../assets/img/George6.jpg";
// import MediaCard from "../components/mediaCard";
import Carousel from "../../src/components/carousel"

class About extends React.Component {
  render() {
    return(
    <div className="container">
      <div className="body"><Carousel/></div>
    
    </div>
    )
  }
};
export default About;