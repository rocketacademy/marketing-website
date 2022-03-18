import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';


const SidebarSection = ({ sectionArray, pagename }) => {
  useEffect(() => {    
    const sidebarItems = document.querySelectorAll('.sidebar-col-desktop a.nav-link');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      })

      sidebarItems.forEach( item => {      
        
        item.classList.remove('active');
          if (item.classList.contains(current)) {
            item.classList.add('active');
          }
      })
    })
  }, []);
  

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
                className={sectionId}
                key={index}
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
                <Dropdown.Item key={section.sidebarlabel}>
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