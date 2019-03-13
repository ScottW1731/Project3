import React from "react";
import { MDBRow } from "mdbreact";
import "./inspired.scss"


// const numCols = 3;
// const colHeights = Array(numCols).fill(0);
// const container = document.getElementById('masonry-with-flex');
// Array.from(container.children).forEach((child, i) => {
//     const order = i % numCols;
//     child.style.order = order;
//     colHeights[order] += parseFloat(child.clientHeight);

// })
// container.style.height = Math.max(...colHeights) + 'px';
class Inspired extends React.Component{
    
    render(){
        return(
            <div className="body">
             <MDBRow className="masonry-with-flex">
                <div>
                1
                </div>
                <div>
                2
                </div>
                <div>
                3
                </div>
                <div>
                4
                </div>
                <div>
                5
                </div>
                <div>
                6
                </div>
                <div>
                7
                </div>
                <div>
                8
                </div>
                <div>
                9
                </div>
                <div>
                10
                </div>
                <div>
                11
                </div>
                <div>
                12
                </div>
                <div>
                13
                </div>
                <div>
                14
                </div>
                <div>
                15
                </div>
            </MDBRow>
        </div>
    );
  }
}


export default Inspired;

