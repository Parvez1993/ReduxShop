import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Appbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Redux Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">HOME</Nav.Link>
              <Nav.Link href="#pricing">PRODUCTS</Nav.Link>
              <Nav.Link href="#pricing">ABOUT</Nav.Link>
              <Nav.Link href="#pricing">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
