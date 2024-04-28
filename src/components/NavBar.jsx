import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const {  calculateTotal } = useContext(CartContext);

  return (
    <Navbar bg="primary" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home" className="text-white ms-4 text-decoration-none">🍕Pizzeria Mamma Mía!</Link>
        </Nav>
        <Link to="/carrito" className="text-white ms-auto text-decoration-none mr-5">🛒(${calculateTotal()})</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

