import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <h1>Copyright © {year} meyz news all rights reserved</h1>
      <p>Developed by bintzone</p>
    </div>
  );
};

export default Footer;
