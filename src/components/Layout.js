import React from 'react';
import { Footer } from './Footer';
import { Logo } from './Logo';

export const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Logo />
      {children}
      <Footer />
    </div>
  );
};
