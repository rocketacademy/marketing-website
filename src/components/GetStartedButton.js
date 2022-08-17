import React from "react";
import { Link } from "gatsby";

const GetStartedButton = ({ toPath }) => {
  return (
    <Link
      to={toPath}
      target="_blank"
      style={{ textDecoration: "none", color: "white" }}
    >
      <button className="btn get-started-btn btn-primary">Get Started</button>
    </Link>
  );
};

export default GetStartedButton;
