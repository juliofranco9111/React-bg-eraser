import React, { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

import { Button } from './Button';

export const ColorPicker = () => {
  const { dataImg, setDataImage } = useContext(ImageContext);

  const setTransparent = () => {
    setDataImage({ ...dataImg, color: 'transparent' });
  };

  const close = () =>
    setDataImage({
      ...dataImg,
      picker: false,
    });

  const toggle = () =>
    setDataImage({
      ...dataImg,
      picker: !dataImg.picker,
    });

  return (
    <>
      <div className='color-picker'>
        <h4>
          Select background color:{' '}
          {dataImg.color.includes('NaN') ? 'transparent' : dataImg.color}
        </h4>
        <div className='picker'>
          <button
            className='swatch'
            style={{ backgroundColor: dataImg.color }}
            onClick={() => toggle(true)}
          />
          <button
            className='swatch'
            style={{ backgroundColor: 'transparent' }}
            onClick={() => setTransparent()}>
            /
          </button>
        </div>
      </div>
      {dataImg.picker && (
        <div className='color-picker-button-container'>
          <Button color='primary' fn={close}>
            OK
          </Button>
        </div>
      )}
    </>
  );
};
