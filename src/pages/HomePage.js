import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ImageEmpty } from '../components/ImageEmpty';
import { getURL } from '../helpers/getURL';
import { uploadIcon } from '../icons/icons';

export const HomePage = () => {
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
    <div className='section'>
      <>
        <div className='card-image'>
          {localImage ? (
            <img src={localUrl} alt='local-file' />
          ) : (
              <ImageEmpty fnClick={handleClick} fnChangeInput={handleChange} />
          )}
        </div>
        {!localImage &&
        <Button color='secondary' fn={handleClick} icon={uploadIcon}>
          Upload
        </Button>
        }
      </>
    </div>
  );
};
