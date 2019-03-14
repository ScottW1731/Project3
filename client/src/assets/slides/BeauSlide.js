import React from 'react';


class BeauSlide extends React.Component{
    render(){
        return(
            <div className="carousel-item">
                

                    <div className="col-md-4">
                        <div className="card mb-2">
                            <img className="card-img-top" src={require("../img/image.png")}
                                alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title">Beau "BackEnd Beast" Simpson</h4>
                                <a className="btn btn-primary" href="https://github.com/beausimpson">Github</a>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default BeauSlide;