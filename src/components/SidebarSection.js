import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';


const SidebarSection = ({ sectionArray, pagename }) => {
  
  return (
    <>
      <div className='col-12 col-md-3 sidebar-col-desktop'>
        <Nav defaultActiveKey="link-0" className="flex-column">
          {sectionArray.map((section, index) => {
            const sectionId = section.sidebarlabel.replace(/ /g, "-").toLowerCase();

            const eventKey = `link-${index}`;
            
            return (
              <Nav.Link 
                as={Link} to={`/${pagename}/#${sectionId}`}
                eventKey={eventKey}
              >
                {section.sidebarlabel}
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
              const sectionId = section.sidebarlabel.replace(/ /g, "-").toLowerCase();

              return (
                <Dropdown.Item>
                  <AnchorLink to={`/${pagename}/#${sectionId}`}>
                    {section.sidebarlabel}
                  </AnchorLink>
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