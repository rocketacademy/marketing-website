import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';


const FaqSidebarSection = ({ general, codingbasics, softwareengineeringbootcamp }) => {
  return (
    <>
      <div className='col-12 col-md-2 faq-content-sidebar-col-desktop'>
        <Nav defaultActiveKey="link-0" className="flex-column">
              <Nav.Link 
                eventKey="link-0"
                href="#general"
              >
                {general.heading}
              </Nav.Link>
              <Nav.Link 
                eventKey="link-1"
                href="#codingbasics"
              >
                {codingbasics.heading}
              </Nav.Link>
              <Nav.Link 
                eventKey="link-2"
                href="#softwareengineeringbootcamp"
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
            <Dropdown.Item href="#/action-1">
              {general.heading}
              </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              {codingbasics.heading}
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              {softwareengineeringbootcamp.heading}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default FaqSidebarSection