import React from "react";
import { FormControl,
  Nav, Navbar, Container, Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar() {
  return (
    <div className = "">
   <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home"><img src="http://wp.usatodaysports.com/wp-content/uploads/sites/90/2013/06/b9hvwjslf7jzh18ej6y4.gif" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
    <Nav className="me-auto">
    <FormControl
                type="search"
                placeholder="Search for the products"
                className="me-2"
                aria-label="Search"
              />
              
              <Button variant="outline-light w-25 h-25 p-2 " className="login">Login</Button>
      <Button href="#action2" variant="outline-warning" className="d-flex w-25" >
              <i className="fas fa-shopping-cart "></i>&nbsp; Cart
              </Button>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
      {/* <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="https://cdn.worldvectorlogo.com/logos/flipkart.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary w-50 h-25">Home</Button>
              <Button href="#action2" variant="outline-warning" className="d-flex w-75 h-25" size = "lg">
              <i class="fas fa-shopping-cart fa-xs"></i>&nbsp; Cart
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default NavBar;
