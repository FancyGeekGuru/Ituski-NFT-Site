import React from 'react';
import { Navbar as BsNavbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import './index.scss';

const Navbar = () => {

  return (
    <BsNavbar collapseOnSelect className='' expand='md' variant='dark'>
      <Container>
        <div></div>
        <BsNavbar.Toggle aria-controls='responsive-navbar-nav' />
        <BsNavbar.Collapse id='responsive-navbar-nav' className='nav-menu-wrap'>
          <Nav role='navigation' className='ml-auto'>
            <Link to={routeNames.home} aria-current='page' className='custom-link-button custom-nav-link'>
              Home
            </Link>
            <div style={{ width: '1rem' }} />

          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
