import React from 'react'
import { Link } from 'gatsby';


const GetStartedButton = () => {
  return (
    <button className="btn get-started-btn btn-primary">
      <Link to="/application"  target="_blank" style={{ textDecoration: "none", color: "white" }}>
        Get Started
      </Link>
    </button>
  )
}

export default GetStartedButton
