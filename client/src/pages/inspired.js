import React from "react";
// import { MDBRow } from "mdbreact";
import "./inspired.scss";
import Nav from "../components/Nav"
// import Mediacard from "../components/mediaCard"


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
    <div>        
        <Nav/>
    <div>        
    <header className="masthead">
        <div className="centered">
            
            <div className="site-branding">
                <h1 className="site-title">Inspired to help but don't know how?</h1>
              <p>Below are just a few organizations specializing in helping Mentor our young.</p>
            </div>
        </div>
    </header>
    
    <main className="main-area">
        
        <div className="centered">

            <section className="cards">
                
                <article className="card">
                    <a href="https://sparkprogram.org/join/volunteers-mentorship/">
                        <picture className="thumbnail">
                            <img src="https://sparkprogram.org/wp-content/uploads/2017/05/logo.png" alt="A banana that looks like a bird"/>
                        </picture>
                        <div className="card-content">

                            <h2>Spark</h2>
                            <p>Make a Difference, Right From Your Desk</p>
                            <p>What does mentorship mean to you? None of us would be where we are today without the support and inspiration of caring adults who helped us find the right path. Spark gives you the opportunity to show a middle school student all that’s possible for their education, career and future.</p>
                        </div>
                    </a>
                </article>

                <article className="card">
                    <a href="https://www.bbbs.org/">
                        <picture className="thumbnail">
                            <img src="https://www.bbbs.org/wp-content/uploads/BBBSA-Logo-170x82.png" alt="Norwegian boller"/>
                        </picture>
                        <div className="card-content">
                            <h2>Big Brother Big Sister</h2>
                            <p>MILLIONS OF CHILDREN NEED A CARING ADULT ROLE MODEL.</p>
                            <p>When children and teens have the influence of a caring adult, they are more likely to avoid risky behaviors and to focus on academics. Today's youth face a variety of challenges, and being matched with a Big Brother or Big Sister can help them navigate these challenges and reach their potential.</p>
                        </div>
                    </a>
                </article>

                <article className="card">
                    <a href="https://kidshopeusa.org/">
                        <picture className="thumbnail">
                            <img src="https://kidshopeusa.org/wp-content/uploads/2017/09/khusa-logo.png" alt="A dinosaur wearing an aluminium jacket"/>
                        </picture>
                        <div className="card-content">
                            <h2>Kids Hope</h2>
                            <p>Too many students stand just one close adult relationship away from thriving in school and in life. This gap hinders education; loneliness obstructs learning. Yet every church’s most abundant resource is people.</p>
                            <p>We provide structure, training, support, and resources designed for use in public schools by churches to give kids what they need most—hope and love from a mentor.</p>
                            <p>Together, we can make a life-long difference. In every school, in every community. One young heart at a time. Let’s do this in yours.</p>
                        </div>
                    </a>
                </article>

                <article className="card">
                    <a href="https://www.yearup.org/about-us/history/?location=national-us/">
                        <picture className="thumbnail">
                            <img src="https://www.yearup.org/wp-content/uploads/2014/01/Hands-640x275.jpg" alt="Chocolate filled boller"/>
                        </picture>
                        <div className="card-content">
                            <h2>Year Up</h2>
                            <p>Guide a young adult to success.</p>
                            <p>Year Up creates a supportive community for our students—and we’re always looking for new faces to help. A mentorship is an especially personal way to impact a young adult’s life.</p>
                        </div>
                    </a>
                </article>

            </section>
           
        </div>
        
    </main>
    </div>

    </div>
    );
  }
}


export default Inspired;

