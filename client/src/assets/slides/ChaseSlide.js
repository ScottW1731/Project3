import React from 'react';


class ChaseSlide extends React.Component{
    render(){
        return(
            <div className="carousel-item">
                

                <div className="col-md-4">
                    <div className="card mb-2">
                        <img className="card-img-top" src={require("../img/cjenkins1.png")} />
                        <div className="card-body">
                            <h4 className="card-title">Chase "The Face" Jenkins</h4>
                            <a className="btn btn-primary" href="https://github.com/cjenkins3">Github</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ChaseSlide;