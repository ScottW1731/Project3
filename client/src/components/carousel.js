import React from "react";
import "./carousel.scss";



// onClickHandle()

class Carousel extends React.Component {
    render() {
        return (

      <div id="carousel-example-1" className="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
    
        
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-1" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-1" data-slide-to="1"></li>
          <li data-target="#carousel-example-1" data-slide-to="2"></li>
        </ol>
        
    
        
        <div className="carousel-inner" role="listbox">
    
          
          <div className="carousel-item">
            
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-indigo-light white-text">
                <ul className="animated fadeInUp col-md-12 list-unstyled list-inline">
                  <li>
                    <h1 className="font-weight-bold text-uppercase">Material Design for Bootstrap 4</h1>
                  </li>
                  <li>
                    <p className="font-weight-bold text-uppercase py-4">The most powerful and free UI KIT for Bootstrap</p>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="https://mdbootstrap.com/getting-started/" className="btn btn-unique btn-lg btn-rounded mr-0">Sign up!</a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="https://mdbootstrap.com/material-design-for-bootstrap/" className="btn btn-cyan btn-lg btn-rounded ml-0">Learn more</a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
          
    
          
          <div className="carousel-item">
      //                   <div className="row">

        <div className="col-md-4">
         <div className="card mb-2">
         <img className="card-img-top" src={require("../assets/img/image.png")}
            alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Beau "BackEnd Beast" Simpson</h4>
            <a className="btn btn-primary" href="https://github.com/beausimpson">Github</a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src={require("../assets/img/cjenkins1.png")}/>
          <div className="card-body">
            <h4 className="card-title">Chase "The Face" Jenkins</h4>
            <a className="btn btn-primary" href="https://github.com/cjenkins3">Github</a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src={require("../assets/img/Screenshot (264).png")}
            alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Scott "Can't Stop" Wagner </h4>
            <a className="btn btn-primary">Github</a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://greece.greekreporter.com/files/byron-1-1068x955.jpeg"
            alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Byron Roberts</h4>
            <a className="btn btn-primary" href ="https://github.com/ByronPRoberts">Github</a>
          </div>
        </div>
      </div>
                        </div>
                        </div>
          
    
          
          <div className="carousel-item active">
            
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-blue-light white-text">
                <ul className="animated fadeInUp col-md-12 list-unstyled">
                  <li>
                    <h1 className="font-weight-bold text-uppercase">Visit our support forum</h1></li>
                  <li>
                    <p className="font-weight-bold text-uppercase py-4">Our community can help you with any question</p>
                  </li>
                  <li>
                    <a target="_blank" href="https://mdbootstrap.com/forums/forum/support/" className="btn btn-lg btn-indigo btn-rounded">Support forum</a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
          
    
        </div>
        
    
        <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
            
                )
                }
};

export default Carousel;

// import React, { Component } from 'react';
// import Slide from '../components/Slide';
// // import LeftArrow from '../components/LeftArrow';
// // import RightArrow from '../components/RightArrow';
// import BeauSlide from "../assets/slides/BeauSlide";
// import ChaseSlide from "../assets/slides/ChaseSlide";
// import ScottSlide from "../assets/slides/ScottSlide";
// import ByronSlide from "../assets/slides/ByronSlide";

// class Carousel extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       slides: [
//         {BeauSlide},
//         {ChaseSlide},
//         {ScottSlide},
//         {ByronSlide},
//       ],
//       currentIndex: 0,
//       translateValue: 0
//     }
//   }

//   goToPrevSlide = () => {

//   }

//   goToNextSlide = () => {
//     // Exiting the method early if we are at the end of the images array.
//     // We also want to reset currentIndex and translateValue, so we return
//     // to the first image in the array.
//     if(this.state.currentIndex === this.state.images.length - 1) {
//       return this.setState({
//         currentIndex: 0,
//         translateValue: 0
//       })
//     }
    
//     // This will not run if we met the if condition above
//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex + 1,
//       translateValue: prevState.translateValue + -(this.slideWidth())
//     }));
//   }

//   slideWidth = () => {
//      return document.querySelector('.slide').clientWidth
//   }

//   RightArrow = () => {
//     return (
//       <div className="nextArrow">
//         <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className="slider">

//         <div className="slider-wrapper"
//           style={{
//             transform: `translateX(${this.state.translateValue}px)`,
//             transition: 'transform ease-out 0.45s'
//           }}>
//             {
//               this.state.slides.map((slide, i) => (
//                 <Slide key={i} slide={slide} />
//               ))
//             }
//         </div>

//         <LeftArrow
//          goToPrevSlide={this.goToPrevSlide}
//         />

//         <RightArrow
//          goToNextSlide={this.goToNextSlide}
//         />
//       </div>
//     );
//   }
// }

// export default Carousel;