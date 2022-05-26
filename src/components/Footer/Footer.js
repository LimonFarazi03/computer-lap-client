import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='bg-primary p-4 footer-sz'>
      <h1 className='text-center'>This is footer</h1>
      <FontAwesomeIcon icon={faCoffee}/>
    </div>
  );
};

export default Footer;