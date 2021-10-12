import React from 'react';
import { Button } from '../components/Button';
import { alertIcon, homeIcon } from '../icons/icons';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className='section error__section'>
      <div className='error__icon__container'>{alertIcon}</div>
      <h1>Oops,</h1>
      <h2>Something wrong happened</h2>
      <br />
      <h3>Select another file or try again later</h3>

      <br />
      <br />

      <Link to='/'>
        <Button color='primary' icon={homeIcon}>
          Home
        </Button>
      </Link>
    </div>
  );
}
