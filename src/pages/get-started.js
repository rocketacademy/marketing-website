import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const CourseSelection = () => {
  return (
    <>
      <Layout>
        <div className="container-fluid py-5 bg-light d-flex align-items-center">
          <div className="container">
            <div className="row mt-5">
              <h1 className="text-center">Start your coding journey today</h1>
            </div>
            <div className="row justify-content-center my-5">
              <Card style={{ width: "28rem" }} className="mx-3 mb-5">
                <Card.Body>
                  <Card.Title>
                    <h3>Coding Basics</h3>
                  </Card.Title>
                  <h5>S$199 / HK$1199 / AU$209</h5>
                  <Card.Text className="mt-4">
                    Learn the fundamental building blocks of what it takes to
                    code.
                  </Card.Text>
                  <Card.Text>
                    Perfect for beginners looking to dip their toes into
                    expansive field through computational thinking. The course
                    is taught in JavaScript, and will even show you the basics
                    of HTML and CSS.
                  </Card.Text>
                  <Card.Text>
                    If you're looking to take that first step, look no further
                    and register now!
                  </Card.Text>
                  <button className="btn get-started-btn btn-primary my-4">
                    <Link
                      to="https://learn.rocketacademy.co/student/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Register now
                    </Link>
                  </button>
                </Card.Body>
              </Card>
              <Card style={{ width: "28rem" }} className="mx-3 mb-5">
                <Card.Body>
                  <Card.Title>
                    <h3>Coding Bootcamp</h3>
                  </Card.Title>
                  <h5>S$7,999 / HK$45,999 / AU$8,399</h5>
                  <Card.Text className="mt-4">
                    Rocket Academy's flagship course gets you ready to be a
                    software engineer.
                  </Card.Text>
                  <Card.Text>
                    Taught in JavaScript, you will be introduced to modern
                    frameworks commonly used in the industry. The course also
                    delves into Data Structures and Algorithms vital for
                    interviews as well as efficient applications.
                  </Card.Text>
                  <Card.Text>
                    The community at Rocket's bootcamp supports each other,
                    providing students with an unshakable network of peers as
                    they venture into software engineering.
                  </Card.Text>
                  <Card.Text>
                    Sign up now if you're ready to take that next step!
                  </Card.Text>
                  <button className="btn get-started-btn btn-primary my-4">
                    <Link
                      to="/courses/bootcamp/apply/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Apply now
                    </Link>
                  </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CourseSelection;
