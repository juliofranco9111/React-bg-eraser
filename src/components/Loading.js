import React from 'react';
import { loadingIcon } from '../icons/icons';

export const Loading = () => {
  return (
    <div className="loading">

      {loadingIcon}
      <br/>
      <h1 className="">Loading...</h1>
    </div>
  );
};
