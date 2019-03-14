import React from 'react';


class ByronSlide extends React.Component{
    render(){
        return(
            <div className="carousel-item">
                

                <div className="col-md-4">
                    <div className="card mb-2">
                        <img className="card-img-top" src="https://greece.greekreporter.com/files/byron-1-1068x955.jpeg"
                            alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Byron Roberts</h4>
                            <a className="btn btn-primary" href="https://github.com/ByronPRoberts">Github</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ByronSlide;