import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';


const Footer = () => {

  return (
    <div className="container-fluid footer-outer-container">
        <div className="container footer-inner-container">
          <div className="row footer-top-row">
            <div className="col-12 col-md-4 footer-top-left-col">
              <StaticImage className='desktop-brand' src="../img/rocket-brand-footer.png" alt="footer brand desktop logo" />
              <StaticImage className='mobile-brand' src="../img/rocket-footer-mobile-logo.png" alt="footer brand mobile logo" />
            </div>
            <div className="col-12 col-md-8 footer-top-middle-col">
              <div className="row footer-top-middle-row">
                <div className="col-6 col-md-4 footer-top-middle-col">
                  <p className="footer-top-middle-col-heading">COURSES</p>
                    <ul className='footer-top-middle-col-list'>
                        <li>
                          <Link to="/basics">
                            Coding Basics
                          </Link>
                          </li>
                        <li>
                          <Link to="/bootcamp">
                            Software Engineering Bootcamp
                          </Link>     
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md-4 footer-top-right-col">
                  <p className="footer-top-right-col-heading">SUPPORT</p>
                    <ul className='footer-top-right-col-list'>
                      <li>
                        <Link to="/faq">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <a href="mailto:hello@rocketacademy.co" >
                          hello@rocketacademy.co
                        </a>
                      </li>
                    </ul>
                </div>
                <div className="col-6 col-md-4 footer-top-right-col">
                   <p className="footer-top-right-col-heading">COMPANY</p>
                    <ul className='footer-top-right-col-list'>
                        <li>
                          <Link to="/about">
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers">
                            Careers
                          </Link>
                        </li>
                    </ul>
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