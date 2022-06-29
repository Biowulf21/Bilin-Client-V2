import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Bilin - The Food Donation App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/get-involved'}>Get Involved</Nav.Link>
            <Nav.Link as={Link} to={'/knowledge-hub'}>Knowledge Hub</Nav.Link>
            <Nav.Link as={Link} to={'/about-us'}>About Us</Nav.Link>
            <Nav.Link as={Link} to={'/faq'}>FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}

export {NavBar};