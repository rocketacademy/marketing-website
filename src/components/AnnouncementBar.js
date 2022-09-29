import { Link } from "gatsby";
import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const AnnouncementBar = () => (
  <Link to="/courses/basics" className="announcement-bar-link">
    <Alert variant="blue" className="announcement-bar">
      <Container>
        <Alert.Heading className="announcement-bar-heading h6">
          ⭐️ EARLY BIRD PROMO: Save up to S$40 off when you sign up for
          November’s Coding Basics course. Offer ends Oct 30.
        </Alert.Heading>
      </Container>
    </Alert>
  </Link>
);

export default AnnouncementBar;
