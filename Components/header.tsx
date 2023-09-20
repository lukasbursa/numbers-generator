import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} href={"/"}>
          Numbers App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/generator">
              Generator
            </Nav.Link>
            <Nav.Link as={Link} href="/history">
              History
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
