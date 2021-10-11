/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { ImageEmpty } from '../components/ImageEmpty';
import { ImageContext } from '../context/ImageContext';
import { getURL } from '../helpers/getURL';
import { cancelIcon, sendIcon, uploadIcon } from '../icons/icons';
import { ColorPicker } from '../components/ColorPicker';
import { HexColorPicker } from 'react-colorful';

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

  const changeColor = (color) => {
    setDataImage({
      ...dataImg,
      color: color,
    });
  };

  return (
    <div className='section'>
      <div className='card-image animated fadeIn'>
        {dataImg.picker ? (
          <HexColorPicker color={dataImg.color} onChange={changeColor} />
        ) : dataImg.localImage && !dataImg.picker ? (
          <img src={dataImg.localUrl} alt='local-file' />
        ) : (
          <ImageEmpty fnClick={handleClick} fnChangeInput={handleChange} />
        )}
        {!dataImg.localImage && !dataImg.picker && (
          <Button color='primary' fn={handleClick} icon={uploadIcon}>
            Upload
          </Button>
        )}

        {dataImg.localImage && !dataImg.picker && (
          <div className='buttons-container animated fadeIn'>
            <Button color='primary' fn={reset} icon={cancelIcon}>
              Cancel
            </Button>
            <Button color='secondary' fn={send} icon={sendIcon}>
              Go!
            </Button>
          </div>
        )}
        {dataImg.localImage && <ColorPicker />}
      </div>
    </div>
  );
}
