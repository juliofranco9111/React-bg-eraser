import React from 'react';
import { loadingIcon } from '../icons/icons';

export const Loading = () => {
  return (
    <div className="loading">

      {loadingIcon}
      
      <h1 className="loading-text">Loading...</h1>
    </div>
  );
};
