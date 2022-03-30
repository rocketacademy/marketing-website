import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { navigate } from 'gatsby';
import Button from 'react-bootstrap/Button'; 
import Layout from '../components/Layout';

const ApplicationSuccessful = () => {

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate('/');
  } 

  return (
    <Layout>
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Thanks for your application 🙂</Modal.Title>
        </Modal.Header>
        <Modal.Body>You'll receive an email acknowledgement from us shortly.</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    </Layout>
  )
}

export default ApplicationSuccessful