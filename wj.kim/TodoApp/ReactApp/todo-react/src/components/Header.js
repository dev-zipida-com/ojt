import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">TodoApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/list">Home</Nav.Link>
          <Nav.Link href="/write">Write</Nav.Link>
          <Nav.Link href="/chat">Chat</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign up</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
