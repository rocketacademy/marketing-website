import React from "react";
import Layout from "../components/Layout";
import { useEffect } from "react";

const ApplicationSuccessful = () => {
  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-10817488949/-jLiCLDBr7cDELWQl6Yo",
      });
    }
  }, []);

  return (
    <Layout>
      <div class="row thanks-row">
        <div class="thanks-message-cont">
          <h4>Thank you for choosing Rocket Academy!</h4>
          <p>
            We have received your application and you will receive an email
            acknowledgement from us shortly.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationSuccessful;
