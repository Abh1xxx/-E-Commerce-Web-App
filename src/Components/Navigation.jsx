import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Cartsidepage from '../Pages/Cartsidepage';

function Navigation() {
  const cartItem = useSelector((state) => state.cart.value);

  return (
    <Navbar expand="lg" className="header-theme navbar-dark">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          ShopLux
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#shop" className="text-light">Shop</Nav.Link>
            <Nav.Link href="#new-arrivals" className="text-light">New Arrivals</Nav.Link>
            <Nav.Link href="#best-sellers" className="text-light">Best Sellers</Nav.Link>
            <Nav.Link href="#deals" className="text-light">Deals</Nav.Link>
            <Nav.Link href="#account" className="text-light">My Account</Nav.Link>
          </Nav>
          <Cartsidepage />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
