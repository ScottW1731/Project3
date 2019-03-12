import React from "react";
// import Mediacard from "../components/mediaCard";
// import George4 from "../assets/img/George4"
// import George5 from "../assets/img/George5"
// import George6 from "../assets/img/George6"


// onClickHandle()

class Carousel extends React.Component {
    render() {
        return (
            <div className="container">
           
                <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item">
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
                        <div className="carousel-item active ">
                        <div className="row">

                        <div className="col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://media.giphy.com/media/TlYLzJEIUuYLu/giphy.gif"
            alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a className="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://media.giphy.com/media/TlYLzJEIUuYLu/giphy.gif"
            alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a className="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://media.giphy.com/media/TlYLzJEIUuYLu/giphy.gif"
            alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a className="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
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
