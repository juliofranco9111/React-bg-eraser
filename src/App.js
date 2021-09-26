import { useEffect, useState } from 'react';
import './App.css';
import { getURL } from './helpers/getURL';
import { useResponse } from './hooks/useResponse';

function App() {
  const [{ localImage, localUrl }, setDataLocal] = useState({
    localImage: null,
    localUrl: null,
  });

  const [colorPicker, setColorPicker] = useState(false)

  const handleClick = () => {
    const input = document.getElementById('fileSelector');
    input.click();
  };

  const [result, url, error, loading] = useResponse(localImage);

  useEffect(() => {
    console.log(error, '*****APP******');
  }, [error]);

  const handleChange = (e) => {
    e.preventDefault();

    const [file] = e.target.files;

    const imageURL = getURL(file);

    setDataLocal({
      localImage: file,
      localUrl: imageURL,
    });
  };

  return (
    <div className='App-header'>
      <h1>Upload an image to remove the background</h1>

      <div onClick={handleClick} className='App-input'>
        Click para agregar una imagen
        <input
          id='fileSelector'
          type='file'
          accept='image/*'
          name='file'
          onChange={handleChange}
        />
      </div>

      <div className='App-img-box'>
        <div className='img-box'>
          <img src={localUrl} alt='' />
        </div>
        <div className='divider'></div>
        <div className='img-box'>
          {loading ? <h1>Loading</h1> : <img src={url} alt='' />}
          {error && <p>Error {error}</p>}
        </div>
      </div>
      <a className='pointer' download href={url}>
        Descargar
      </a>
      <br/>
      <button onClick={() => setColorPicker(true)} className='pointer'>Color</button>
    </div>
  );
}

export default App;
