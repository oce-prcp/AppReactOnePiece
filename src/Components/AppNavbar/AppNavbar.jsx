import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src ="https://res.cloudinary.com/firewax/image/upload/v1645527171/logo_knbcve.png"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/marines">
              Marines
            </Nav.Link>
            <Nav.Link as={Link} to="/pirates">
              Pirates
            </Nav.Link>
            <Nav.Link as={Link} to="/shichibukai">
              Shichibukai
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
