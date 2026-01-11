import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/WOMP_logo_sm.png';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
        {/* Sostituisci Navbar.Brand con un'immagine */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Warehouse App Logo"
            height="60" // Regola altezza
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;