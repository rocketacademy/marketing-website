import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const AnnouncementBar = () => (
  <Alert variant="blue" className="announcement-bar">
    <Container>
      <Alert.Heading className="announcement-bar-heading">
        Sign up for our free webinar
        <br />
        <Alert.Link
          href="https://rkt.ac/yntc"
          target="_blank"
          className="announcement-bar-link"
        >
          You Need to Code!
        </Alert.Link>
      </Alert.Heading>
    </Container>
  </Alert>
);

export default AnnouncementBar;