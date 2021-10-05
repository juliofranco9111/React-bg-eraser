import React from 'react';
import { alertIcon } from '../icons/icons';

export default function ErrorPage() {
  return (
    <div className='section error__section'>
      <div className='error__icon__container'>{alertIcon}</div>
      <h1>Error</h1>
      <h2>Check your internet connection</h2>
      <h3>...or, try again later</h3>
    </div>
  );
}
