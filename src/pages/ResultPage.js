import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ImageEmpty } from '../components/ImageEmpty';
import { Loading } from '../components/Loading';
import { ImageContext } from '../context/ImageContext';
import { useResponse } from '../hooks/useResponse';
import { downloadIcon, homeIcon } from '../icons/icons';

export default function ResultPage() {
  const { dataImg, setDataImage } = useContext(ImageContext);

  const [imgProcessed, urlImg, error, loading] = useResponse(
    dataImg.localImage
  );

  const history = useHistory();

  useEffect(() => {
    if (error) {
      history.push('/error');
    }
  }, [error]);

  return (
    <div className='section result__page_section'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='card-image-result'>
            <img src={urlImg} alt='local-file' />
          </div>
          <div className='result__page__buttons_container'>
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
        </>
      )}
    </div>
  );
}
