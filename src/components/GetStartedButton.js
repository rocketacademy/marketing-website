import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";

const GetStartedButton = ({ toPath }) => {
  return (
    <Link to={toPath} target="_blank">
      <Button className="get-started-btn">Start Learning</Button>
    </Link>
  );
};

export default GetStartedButton;
