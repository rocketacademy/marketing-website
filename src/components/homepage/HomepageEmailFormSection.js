// import { StaticImage } from "gatsby-plugin-image";
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

  const postSubmitSuccessMessage = <p>Thank you for joining!</p>;

  const postSubmitErrorMessage = (
    <p>
      Oops! Something went wrong saving your email. Please email{" "}
      <a href="mailto:hello@rocketacademy.co">hello@rocketacademy.co</a> and we
      would be happy to help!
    </p>
  );

  const postSubmitMessage = (
    <div>
      <div className="homepage-email-form-post-submit-discord-section">
        <div>Click below to join: </div>
        <a href="https://discord.gg/CcDRpEfhRK">
          <Image
            src={joinDiscordImg}
            alt="Join Discord"
            placeholder="blurred"
            fluid
            style={{ maxWidth: "300px" }}
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
        <Form.Control
          className="homepage-email-form-control"
          type="email"
          placeholder="iloverocket@gmail.com"
          onChange={handleChange}
        />
        <Button
          variant="primary"
          type="submit"
          className="homepage-email-form-button"
        >
          →
        </Button>
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
