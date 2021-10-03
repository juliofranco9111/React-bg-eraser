import React from 'react';
import { imageIcon } from '../icons/icons';

export const ImageEmpty = ({ fnClick = () => {}, fnChangeInput = () =>{}}) => {
  return (
    <div onClick={fnClick} className='card-image-empty pointer'>
      {
        imageIcon
      }

      <input
        id='card-image-input'
        type='file'
        accept='image/*'
        name='file'
        onChange={fnChangeInput}
      />
    </div>
  );
};
