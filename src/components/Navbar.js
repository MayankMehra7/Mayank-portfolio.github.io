import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom';
import { CgFileDocument } from 'react-icons/cg';
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  
  // useLocation hook to get the current path
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : ''}
    >
<Navbar.Brand as={Link} to="/">
          <p
            style={{
              color: '#fff',
             
              fontWeight: '700',
              letterSpacing: '1px',
              fontSize: '28px',
            }}
          >
            Mayank Mehra
          </p>
</Navbar.Brand>
    <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className={location.pathname === '/' ? 'active' : ''}
              >
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className={location.pathname === '/about' ? 'active' : ''}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className={location.pathname === '/project' ? 'active' : ''}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Experience"
                onClick={() => updateExpanded(false)}
                className={location.pathname === '/Experience' ? 'active' : ''}
              >
                <FaBriefcase style={{ marginBottom: '2px' }} /> Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className={location.pathname === '/resume' ? 'active' : ''}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
