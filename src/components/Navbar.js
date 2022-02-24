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
                <Navbar.Collapse className="justify-content-end navbar-collapse">
                <Nav>
                    <Nav.Item className="navbar-item">
                        <NavDropdown title="Courses"> 
                            <NavDropdown.Item>
                                <Link to="/courses/basics">
                                    Coding Basics
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="courses/bootcamp">
                                    Software Engineering Bootcamp
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item className="navbar-item">
                        <NavDropdown title="Community">
                            <NavDropdown.Item>
                                <Link to="/community/alumni">
                                    Alumni
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/community/qanda">
                                    Q and A
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item className="navbar-item">
                        <Link to="/about">
                            <Nav.Link href="#link">About Us</Nav.Link>
                        </Link>

                    </Nav.Item>
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