import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';



const Footer = () => {

  return (
    <div className="container-fluid footer-outer-container">
        <div className="container footer-inner-container">
          <div className="row footer-top-row">
            <div className="col-12 col-md-4 footer-top-left-col">
              <StaticImage className='desktop-brand' src="../img/rocket-brand-footer.png" alt="footer brand desktop logo" />
              <StaticImage className='mobile-brand' src="../img/rocket-footer-mobile-logo.png" alt="footer brand mobile logo" />
            </div>
            <div className="col-12 col-md-4 footer-top-middle-col">
              <div className="row footer-top-middle-row">
                <div className="col-6 footer-top-middle-col">
                    <p className="footer-top-middle-col-heading">COURSES</p>
                    <ul className='footer-top-middle-col-list'>
                        <li>Coding Basics</li>
                        <li>Software Engineering Bootcamp</li>
                    </ul>
                </div>
                <div className="col-6 footer-top-middle-col">
                  <p className="footer-top-right-col-heading">COMPANY</p>
                  <ul className='footer-top-right-col-list'>
                      <li>About us</li>
                      <li>Careers</li>
                  </ul>
                </div>
              </div>
            </div>
             <div className="col-12 col-md-4 footer-top-right-col">
              <div className="row footer-top-right-row">
                <div className="col-6 footer-top-right-col">
                  <p className="footer-top-right-col-heading">SUPPORT</p>
                  <ul className='footer-top-right-col-list'>
                      <li>FAQ</li>
                      <li>hello@rocketacademy.co</li>
                  </ul>
                </div>
                <div className="col-6 footer-top-right-col">
                     
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom-row">
                <div className="col-12 col-md-6 order-2 order-md-1 footer-bottom-row-text-col">
                  © Rocket Academy. 2021 All rights reserved.
                  <span className='privacy-text'><strong> Privacy and cookies policy</strong></span> 
                </div>
                <div className='col-12 col-md-6 order-1 order-md-2 footer-bottom-row-icons'>
                  <div className='icons-container'>
                    <StaticImage className="icon" src="../img/social/facebook-logo.png" alt="facebook logo" />
                    <StaticImage className="icon" src="../img/social/instagram-logo.png" alt="instagram logo" />
                    <StaticImage className="icon" src="../img/social/linkedin-logo.png" alt="linkedin logo" />
                  </div>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Footer