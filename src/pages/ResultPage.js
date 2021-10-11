/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';
import { ImageContext } from '../context/ImageContext';
import { useResponse } from '../hooks/useResponse';
import { downloadIcon, homeIcon } from '../icons/icons';

export default function ResultPage() {
  const { dataImg, setDataImage } = useContext(ImageContext);

  const history = useHistory();

  const { urlImg, error, loading } = useResponse({image: dataImg.localImage,bg: dataImg.color});
  useEffect(() => {
    if (error) {
      setDataImage({
        ...dataImg,
        error,
      });
      history.push('/error');
    }
  }, [error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='card-image-container'>
          <div className='card-image'>

          <img src={urlImg} alt='local-file' />
          </div>
          <div className='buttons-container'>
            <Link to='/'>
              <Button color='primary' icon={homeIcon}>
                Home
              </Button>
            </Link>

            <a download href={urlImg}>
              <Button color='secondary' icon={downloadIcon}>
                Download
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
