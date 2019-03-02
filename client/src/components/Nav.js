import React from "react";
// import Navbar from "react-bootstrap/Navbar";

class Nav extends React.Component {
    render(){
        return(
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                {/* <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> */}
            </Navbar>
        );
    }
}
export default Nav;