import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'gatsby';

const FaqSidebarSection = ({ general, codingbasics, softwareengineeringbootcamp }) => {
  return (
    <>
      <div className='col-12 col-md-2 faq-content-sidebar-col-desktop'>
        <Nav defaultActiveKey="link-0" className="flex-column">
              <Nav.Link as={Link} to={`/faq/#${general.heading.toLowerCase()}`}
                eventKey="link-0"
              >
                {general.heading}
              </Nav.Link>
              <Nav.Link as={Link} to={`/faq/#${codingbasics.heading.toLowerCase()}`}
                eventKey="link-1"
              >
                {codingbasics.heading}
              </Nav.Link>
              <Nav.Link as={Link} to={`/faq/#${softwareengineeringbootcamp.heading.toLowerCase()}`}
                eventKey="link-2"
              >
                {softwareengineeringbootcamp.heading}
              </Nav.Link>
        </Nav>
      </div>
      <div className='col-12 faq-content-sidebar-col-mobile'>
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" >
           --
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={`/faq/#${general.heading.toLowerCase()}`}>
                {general.heading}
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={`/faq/#${codingbasics.heading.toLowerCase()}`}>
                {codingbasics.heading}
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={`/faq/#${softwareengineeringbootcamp.heading.toLowerCase()}`}>
                {softwareengineeringbootcamp.heading}
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default FaqSidebarSection