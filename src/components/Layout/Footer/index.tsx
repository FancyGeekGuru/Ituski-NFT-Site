import React from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';
import './index.scss';

const Footer = () => {
  return (
    <footer className='text-center mt-2 mb-3'>
      <div>
        <a
          {...{
            target: '_blank'
          }}
          className='custom-footer-link d-flex align-items-center'
          href='https://github.com/tomio111'
        >
          Made with <HeartIcon className='mx-1' /> by Tomio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
