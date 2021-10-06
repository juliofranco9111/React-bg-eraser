/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { ImageEmpty } from '../components/ImageEmpty';
import { ImageContext } from '../context/ImageContext';
import { getURL } from '../helpers/getURL';
import { cancelIcon, sendIcon, uploadIcon } from '../icons/icons';

export default function HomePage() {
  const { dataImg, setDataImage } = useContext(ImageContext);

  useEffect(() => {
    function clearData() {
      setDataImage({ ...dataImg, localImage: null, localUrl: null });
    }
    clearData();
  }, []);

  const history = useHistory();

  const handleChange = (e) => {
    const [file] = e.target.files;
    const imageURL = getURL(file);
    setDataImage({
      ...dataImg,
      localImage: file,
      localUrl: imageURL,
    });
  };

  const handleClick = () => {
    const input = document.getElementById('card-image-input');
    input.click();
  };

  const send = () => {
    history.push('/result');
  };

  const reset = () => {
    setDataImage({
      ...dataImg,
      localImage: null,
      localUrl: null,
    });
  };

  return (
    <div className='section'>
      <div className='card-image animated fadeIn'>
        {dataImg.localImage ? (
          <img src={dataImg.localUrl} alt='local-file' />
        ) : (
          <ImageEmpty fnClick={handleClick} fnChangeInput={handleChange} />
        )}
      </div>
      {!dataImg.localImage ? (
        <Button color='secondary' fn={handleClick} icon={uploadIcon}>
          Upload
        </Button>
      ) : (
        <div className='buttons_container animated fadeIn'>
          <Button color='primary' fn={reset} icon={cancelIcon}>
            Cancel
          </Button>
          <Button color='secondary' fn={send} icon={sendIcon}>
            Go!
          </Button>
        </div>
      )}
    </div>
  );
}
