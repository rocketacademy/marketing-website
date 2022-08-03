import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

import joinDiscordImg from "./join-discord.png";

const HomepageEmailFormSection = () => {
  const [email, setEmail] = useState();
  const [hasSubmit, setHasSubmit] = useState(false);
  const [wasSubmitSuccess, setWasSubmitSuccess] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send email to Netlify function
    let response;
    try {
      response = await fetch("/.netlify/functions/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      console.error("Error: ", error);
      setWasSubmitSuccess(false);
    }

    // Let user know when submit email fails
    if (!response.ok) {
      setWasSubmitSuccess(false);
    }

    // Show post-submit UI
    setHasSubmit(true);
  };

  const postSubmitSuccessMessage = <div>Thank you for joining!</div>;

  const postSubmitErrorMessage = (
    <div>
      Oops! Something went wrong saving your email. Please email{" "}
      <a href="mailto:hello@rocketacademy.co">hello@rocketacademy.co</a> and we
      would be happy to help!
    </div>
  );

  const postSubmitMessage = (
    <div>
      <div className="homepage-email-form-post-submit-discord-section">
        <div>Click below to join: </div>
        <a href="https://discord.gg/CcDRpEfhRK" target="_blank">
          <Image
            className="homepage-email-form-post-submit-discord-image"
            src={joinDiscordImg}
            alt="Join Discord"
            placeholder="blurred"
            fluid
          />
        </a>
      </div>
      {wasSubmitSuccess ? postSubmitSuccessMessage : postSubmitErrorMessage}
    </div>
  );

  const emailForm = (
    <div>
      <h6 className="homepage-email-form-header">
        Sign up to join Rocket's Discord community and receive our newsletters!
      </h6>
      <Form
        className="homepage-email-form"
        name="homepage-email-form"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Control
            className="homepage-email-form-control"
            type="email"
            placeholder="iloverocket@gmail.com"
            onChange={handleChange}
            required
          />
          <Button
            variant="primary"
            type="submit"
            className="homepage-email-form-button"
          >
            →
          </Button>
        </Form.Group>
      </Form>
    </div>
  );

  return (
    <div className="container-fluid homepage-email-form-container">
      <div className="container">
        {hasSubmit ? postSubmitMessage : emailForm}
      </div>
    </div>
  );
};

export default HomepageEmailFormSection;
