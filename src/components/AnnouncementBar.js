import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const AnnouncementBar = () => (
  <a
    href="https://rkt.ac/open-night"
    target="_blank"
    className="announcement-bar-link"
  >
    <Alert variant="blue" className="announcement-bar">
      <Container>
        <Alert.Heading className="announcement-bar-heading h6">
          🎁 Win yourself a Coding Basics course at Rocket’s Open Night
          happening 9 Nov 730PM SGT. Sign up here!
        </Alert.Heading>
      </Container>
    </Alert>
  </a>
);

export default AnnouncementBar;
