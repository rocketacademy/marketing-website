import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'gatsby';

const SidebarSection = ({ sectionArray }) => {
  return (
    <>
      <div className='col-12 col-md-2 sidebar-col-desktop'>
        <Nav defaultActiveKey="link-0" className="flex-column">
          {sectionArray.map((section, index) => {
            const eventKey = `link-${index}`;
            return (
              <Nav.Link 
                as={Link} to={`/faq/#${section.heading.toLowerCase()}`}
                eventKey={eventKey}
              >
                {section.heading}
              </Nav.Link>
            )
          })}
        </Nav>
      </div>

      <div className='col-12 sidebar-col-mobile'>
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" >
           --
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {sectionArray.map(section => {
              return (
                <Dropdown.Item>
                  <Link to={`/faq/#${section.heading.toLowerCase()}`}>
                    {section.heading}
                  </Link>
                </Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default SidebarSection