import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { navigate } from 'gatsby';
import Button from 'react-bootstrap/Button'; 
import Layout from '../components/Layout';

const ApplicationSuccessful = () => {

  return (
    <Layout>
      <div class="row thanks-row">
        <div class="thanks-message-cont">
          <h4>Thanks for submitting your application 🙂</h4>
          <p>
            You'll receive an email acknowledgement from us shortly.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ApplicationSuccessful