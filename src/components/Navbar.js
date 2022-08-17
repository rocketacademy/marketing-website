import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const SiteNavbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarLogo {
      rocketBrand: file(relativePath: { eq: "navbar-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `);

  const navbarBrand = getImage(data.rocketBrand);
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <GatsbyImage
              image={navbarBrand}
              alt="rocket brand image"
              placeholder="blurred"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/courses/basics">Coding Basics</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/courses/bootcamp">Coding Bootcamp</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/about"
              activeClassName="nav-active"
              className="no-dropdown"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/faq"
              activeClassName="nav-active"
              className="no-dropdown"
            >
              FAQ
            </Nav.Link>
            <Nav.Item className="button-container">
              <Link href="/get-started/" target="_blank">
                <Button variant="primary" className="navbar-btn">
                  Get Started
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
