import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { ImageEmpty } from '../components/ImageEmpty';
import { ImageContext } from '../context/ImageContext';
import { getURL } from '../helpers/getURL';
import { sendIcon, uploadIcon } from '../icons/icons';

export default function HomePage() {
  const { dataImg, setDataImage } = useContext(ImageContext);
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
    history.push('/result')
  }

  return (
    <div className='section'>
      <div className='card-image'>
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
        <Button color='secondary' fn={send} icon={sendIcon}>
          Go!
        </Button>
      )}
    </div>
  );
}
