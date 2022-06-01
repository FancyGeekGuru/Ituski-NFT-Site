import React from 'react';
import { Navbar as BsNavbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import './index.scss';
import twitter_logo from 'assets/img/twitter.png';
import discord_logo from 'assets/img/discord.png';
const Navbar = () => {

  return (
    <div className='d-flex justify-content-end'>
      <BsNavbar collapseOnSelect className='' expand='md' variant='dark'>
        <Container className='top-nav-bar'>
          <div>
          </div>
          <BsNavbar.Toggle aria-controls='responsive-navbar-nav' />
          <BsNavbar.Collapse id='responsive-navbar-nav' className='nav-menu-wrap'>
            <Nav role='navigation' className='responsive-margin'>
              <Link to={routeNames.home} aria-current='page' className='custom-link-button custom-nav-link'>
                Home
              </Link>
              <div style={{ width: '1rem' }} />
              <Link to={routeNames.home} aria-current='page' className='custom-link-button custom-nav-link'>
                ART
              </Link>
              <div style={{ width: '1rem' }} />
              <Link to={routeNames.home} aria-current='page' className='custom-link-button custom-nav-link'>
                ITUSKI BRANCHES
              </Link>
              <div style={{ width: '1rem' }} />
              <Link to={routeNames.home} aria-current='page' className='custom-link-button custom-nav-link'>
                <img src={discord_logo} />
              </Link>
              <div style={{ width: '1rem' }} />
              <Link to={routeNames.home} aria-current='page' className='custom-link-button custom-nav-link'>
                <img src={twitter_logo} />
              </Link>
              <div style={{ width: '1rem' }} />
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </div>
  );
};

export default Navbar;
