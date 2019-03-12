import React from "react";
// import Mediacard from "../components/mediaCard";
// import George4 from "../assets/img/George4"
// import George5 from "../assets/img/George5"
// import George6 from "../assets/img/George6"


class Carousel extends React.Component {
    render() {
        return (
            <div className="container">
           
                <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-1" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-3" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="view">
                                <img className="d-block w-100" src="https://media.giphy.com/media/CWf0BHVFANlhS/giphy.gif" alt="First slide" />
                                <div className="mask rgba-black-light"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Light mask</h3>
                                <p>First text</p>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className="view">
                                <img className="d-block w-100" src="https://media.giphy.com/media/TlYLzJEIUuYLu/giphy.gif" alt="Second slide" />
                                <div className="mask rgba-black-strong"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Secondary text</p>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className="view">
                                <img className="d-block w-100" src="https://media.giphy.com/media/l3UcFYeOkjUdB7xao/giphy.gif" alt="Third slide" />
                                <div className="mask rgba-black-slight"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Slight mask</h3>
                                <p>Third text</p>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>
            
                )
                }
};

export default Carousel;
