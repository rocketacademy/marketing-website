import React from "react";
import "../styles/main.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Button from "react-bootstrap/Button";


const SiteNavbar = () => {
    const data = useStaticQuery(graphql`
        query NavbarLogo {
        rocketBrand: file(relativePath: {eq: "navbar-logo.png"}) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
    }
    `)

    const navbarBrand = getImage(data.rocketBrand)
    return (
        <Navbar expand="xl" >
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <GatsbyImage image={navbarBrand} alt="rocket brand image" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbar-collapse">
                <Nav>
                    <NavDropdown title="Courses" id="basic-nav-dropdown"> 
                        <NavDropdown.Item>
                            <Link to="/courses/basics">
                                Coding Basics
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/courses/bootcamp">
                                Software Engineering Bootcamp
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={ Link } to="/faq" activeClassName="nav-active">FAQ</Nav.Link>
                    <Nav.Link as={ Link } to="/about" activeClassName="nav-active">About Us</Nav.Link>
                    <Nav.Item className="button-container">
                        <Button variant="outline-primary" className="btn navbar-btn btn-outline-primary">Get Started</Button>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNavbar