import React from 'react';


class ScottSlide extends React.Component{
    render(){
        return(
            <div className="carousel-item">
                

                <div className="col-md-4">
                    <div className="card mb-2">
                        <img className="card-img-top" src={require("../img/Screenshot (264).png")}
                            alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Scott "Can't Stop" Wagner </h4>
                            <a className="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ScottSlide;