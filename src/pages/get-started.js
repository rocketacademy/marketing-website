import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from 'gatsby';


import Layout from "../components/Layout";


const CourseSelection = () => {
    return (
        <>
            <Layout>
                <div style={{ height: '40rem'}} className="container-fluid py-5 bg-light d-flex align-items-center">
                    <div className="container">
                        <div className="row mt-5">
                            <h1 className="mt-5 text-center">
                                Start your coding journey today
                            </h1>
                        </div>
                        <div className="row justify-content-center my-5">
                            <Card style={{ width: '28rem' }} className="mx-3 mb-5">
                                <Card.Body>
                                    <Card.Title><h3>Coding Basics</h3></Card.Title>
                                    <Card.Text>Rocket's live and online, part-time intro to coding course for beginners, taught in JavaScript.</Card.Text>
                                    <Card.Text>For those interested in learning something new.</Card.Text>
                                    <button className="btn get-started-btn btn-primary my-4">
                                        <Link to="https://learn-staging.rocketacademy.co/student/"  target="_blank" style={{ textDecoration: "none", color: "white" }}>
                                            Register now
                                        </Link>
                                    </button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '28rem' }} className="mx-3 mb-5">
                                <Card.Body>
                                    <Card.Title><h3>Coding Bootcamp</h3></Card.Title>
                                    <Card.Text>Rocket's flagship career conversion course, primarily taught in JavaScript and Python.</Card.Text>
                                    <Card.Text>For those ready to make that career switch!</Card.Text>
                                    <button className="btn get-started-btn btn-primary my-4">
                                        <Link to="/courses/bootcamp/apply/"  target="_blank" style={{ textDecoration: "none", color: "white" }}>
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
    )
}

export default CourseSelection;