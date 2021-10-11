import { useEffect, useState } from 'react';
import { getURL } from '../helpers/getURL';

const url = 'https://sdk.photoroom.com/v1/segment';

export const useResponse = ({image, bg = 'transparent'}) => {
  const [imgProcessed, setImgProcessed] = useState(null);
  const [urlImg, setUrlImg] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (image) {
      const getData = async () => {
        setLoading(true);
        const dataImg = new FormData();
        dataImg.append('image_file', image);
        dataImg.append('bg_color', bg);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'x-api-key': 'a0a9a767a41af372abbc82f0b377dfcd92443792',
          },
          body: dataImg,
         
        }).then((response) => {
          if (!response.ok) {
            response
              .json()
              .then((r) => {
                //throw new Error(r.message);
              })
              .catch((error) => {
                setError(error.message);
                return;
              });
          } else {
            return response;
          }
        });

        if (error || !response) {
          setLoading(false);
          return;
        } else {
          setImgProcessed(
            await response.blob().then((r) => {
              setUrlImg(getURL(r));
              setLoading(false);
            })
          );
          setLoading(false);
        }
      };
      getData();
    }
  }, [image, error]);

  return { imgProcessed, urlImg, error, loading };
};
