import './styles/styles.scss';
import RouterComponent from './router/Router';
import { ImageProvider } from './context/ImageContext';

function App() {
  // const [result, url, error, loading] = useResponse(localImage);

  return (
    <ImageProvider>
      <RouterComponent />
    </ImageProvider>
  );
}

export default App;
