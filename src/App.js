import './styles/styles.scss';
import { Layout } from './components/Layout';
import { ErrorPage } from './pages/ErrorPage';
import { ResultPage } from './pages/ResultPage';
import { HomePage } from './pages/HomePage';

function App() {
  // const [result, url, error, loading] = useResponse(localImage);

  return (
    <Layout>

      <HomePage/>

    </Layout>
  );
}

export default App;
