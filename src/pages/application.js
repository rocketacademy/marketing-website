import React from 'react'
import { useEffect, useState } from 'react';
import countries from '../helper/countries';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '../styles/main.scss';
import Layout from '../components/Layout';
import Modal from 'react-bootstrap/Modal';
import { navigate } from 'gatsby';

const ApplicationForm = () => {

  useEffect(() => {
    countries();
  }, []);

  const [validated, setValidated] = useState(false);

  const [inputs, setInputs] = useState({});
  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate('/');
  } 
  
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);

    } else {
      event.preventDefault();
      handleShow();
      fetch('/.netlify/functions/apply-now', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      }); 
    }

   
    
  };

  return (
    <>
    <Layout>
    <div className='container-fluid application-form-header-outer-container'>
      <div className='container application-form-header-inner-container'>
        <div className='row application-form-header-row'>
          <div className='col-12 col-md-8 application-form-header-text-col'>
            Start Your Coding Journey Today
          </div>
          <div className='col-12 col-md-4'>
          </div>
        </div>
      </div>
    </div>
    <div className='container application-form-container'>
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstname"
            value={inputs.firstname || ""}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastname"
            value={inputs.lastname || ""}
            onChange={handleChange}

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustomUsername">
          <Form.Label>Email Address</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              required
              type="email"
              placeholder="username@email.com"
              aria-describedby="inputGroupPrepend"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom03">
          <Form.Label>Country</Form.Label>
          <Form.Select
            id="country" 
            name="country"
            value={inputs.country || ""}
            onChange={handleChange}
            custom>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please choose a valid country.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="3" controlId="validationCustom04">
        <Form.Label>Age</Form.Label>
         <Form.Select required name="age"
            value={inputs.age || ""}
            onChange={handleChange} id="age" custom>
            <option value="">--</option>
            <option value="< 18">&lt; 18</option>
            <option value="18 - 24">18-24</option>
            <option value="25 - 34">25-34</option>
            <option value="35 - 44">35-44</option>
            <option value="45 - 54">45-54</option>
            <option value="55 - 64">55-54</option>
            <option value=">= 65">&gt;= 65</option>
        </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please provide a valid age.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom05">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="+00 0000 0000" name="phone"
            value={inputs.phone || ""}
            onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom06">
        <Form.Label>Describe your coding experience</Form.Label>
         <Form.Select required id="experience" name="experience"
            value={inputs.experience || ""}
            onChange={handleChange} custom>
            <option value="">--</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
        </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please make a valid choice.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom07">
          <Form.Label>LinkedIn profile</Form.Label>
          <Form.Control type="text" placeholder="http://linkedin.com/in/example" name="linkedin"
            value={inputs.linkedin || ""}
            onChange={handleChange}/>
        </Form.Group>
         <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom08">
        <Form.Label>How did you hear about us? </Form.Label>
         <Form.Select required id="source" name="source"
            value={inputs.source || ""}
            onChange={handleChange} custom>
            <option value="">--</option>
            <option value="Word of Mouth">Word of Mouth</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Google">Google</option>
            <option value="YouTube">YouTube</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Other">Other</option>
        </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please make a valid choice.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom09">
          <Form.Label>Tell us about yourself</Form.Label>
          <Form.Control type="text" name="background"
            value={inputs.background || ""}
            onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">
            Please tell us about yourself.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" md="6" controlId="validationCustom09">
          <Form.Label>Which courses are you interested in? </Form.Label>
          <Form.Check>
            <Form.Check.Input 
              name="course_type"
              type="radio"
              value="basics"
              onChange={handleChange}
              required />
            <Form.Check.Label>
              <h6>Coding Basics</h6>
              <p><em>I just want to learn something new</em></p>
            </Form.Check.Label>
          </Form.Check>
          <Form.Check>
            <Form.Check.Input 
              name="course_type"
              type="radio"
              value="basics;bootcamp"
              onChange={handleChange}
              required />
            <Form.Check.Label>
              <h6>Coding Basics and Software Engineering Bootcamp</h6>
              <p><em>I'm new to coding but I am thinking about becoming a software engineer</em></p>
            </Form.Check.Label>
          </Form.Check>
          <Form.Check>
            <Form.Check.Input 
              name="course_type"
              type="radio"
              value="bootcamp"
              onChange={handleChange}
              required />
            <Form.Check.Label>
              <h6>Software Engineering Bootcamp</h6>
              <p><em>I have written small programs before and am thinking about becoming a software engineer</em></p>
            </Form.Check.Label>
            <Form.Control.Feedback type="invalid">Please select a course.</Form.Control.Feedback>
          </Form.Check>
        </Form.Group>
      <Button className="submit-button" type="submit">Submit form</Button>
    </Form>
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thanks for your application 🙂</Modal.Title>
      </Modal.Header>
      <Modal.Body>You'll receive an email confirmation from us shortly.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
    </Layout>
  </>
  );
}

export default ApplicationForm