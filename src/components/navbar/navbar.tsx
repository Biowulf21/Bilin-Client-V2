import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginBtn } from "./sub-components/login_btn.tsx";

const NavBar = () =>{
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand className="" href="/">Bilin - The Food Donation App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
   <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
   <Nav.Link as={Link} to={'/get-involved'}>Get Involved</Nav.Link>
   <Nav.Link as={Link} to={'/knowledge-hub'}>Knowledge Hub</Nav.Link>
   <Nav.Link as={Link} to={'/about-us'}>About Us</Nav.Link>
   <Nav.Link as={Link} to={'/faq'}>FAQ</Nav.Link>
      
    </Nav>
    <Nav>
<LoginBtn className="row-sm-1 justify-content-end"></LoginBtn>      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}

export {NavBar};