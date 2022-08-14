import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";

const GetStartedButton = ({ toPath }) => {
  return (
    <Button className="get-started-btn">
      <Link to={toPath} target="_blank" className="get-started-btn-link">
        Start Learning
      </Link>
    </Button>
  );
};

export default GetStartedButton;
