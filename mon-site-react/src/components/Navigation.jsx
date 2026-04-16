import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" variant="light" className="bg-white sticky-top shadow-sm py-1">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="Code Passion"
            className="nav-logo-responsive" // Notre classe personnalisée
          />
        </Navbar.Brand>
        
        {/* Le bouton Hamburger géré par React */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none"/>
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={Link} to="/" 
              active={location.pathname === "/"}
              className="ms-lg-3 px-2 btn-passion-nav"
            >
              Accueil
            </Nav.Link>
            <Nav.Link 
              as={Link} to="/services" 
              active={location.pathname === "/services"}
              className="ms-lg-3 px-2 btn-passion-nav"
            >
              Expertises
            </Nav.Link>
            <Nav.Link 
              as={Link} to="/contact" 
              active={location.pathname === "/contact"}
              className="ms-lg-3 px-2 btn-passion-nav"
            >
              Parlons de votre projet
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;