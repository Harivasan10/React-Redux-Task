import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const NavBar = () => {
  const CartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="NavB fixed-header">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white font-weight-bold">
          <span className="shopping">Shopping Cart</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="text-dark opt">
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-dark opt">
              <PiShoppingCartSimpleFill />
              <sup>{CartProducts.length}</sup>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
