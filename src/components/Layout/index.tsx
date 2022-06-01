import React from 'react';
import { useLocation } from 'react-router-dom';
import routes, { routeNames } from 'routes';
import Footer from './Footer';
import Navbar from './Navbar';
import './index.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname, search } = useLocation();
  return (
    <div className='background-main-color d-flex flex-column flex-fill wrapper'>
      <Navbar />
      <main className='d-flex flex-column flex-grow-1'>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
