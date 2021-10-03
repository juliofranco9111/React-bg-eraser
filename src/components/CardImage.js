import React, { useState } from 'react';
import { getURL } from '../helpers/getURL';
import { uploadIcon } from '../icons/icons';
import { Button } from './Button';
import { ImageEmpty } from './ImageEmpty';

export const CardImage = () => {
  const [{ localImage, localUrl }, setDataLocal] = useState({
    localImage: null,
    localUrl: null,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    const imageURL = getURL(file);
    setDataLocal({
      localImage: file,
      localUrl: imageURL,
    });
  };

  const handleClick = () => {
    const input = document.getElementById('card-image-input');
    input.click();
  };
  return (
    <>
      <div className='card-image'>
        {localImage ? (
          <img src={localUrl} alt='local-file' />
        ) : (
          <ImageEmpty fnClick={handleClick} fnChangeInput={handleChange} />
        )}
      </div>
      <Button icon={uploadIcon}>Cargar</Button>
    </>
  );
};
