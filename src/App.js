import './styles/styles.scss';
import { Layout } from './components/Layout';
import { ErrorPage } from './pages/ErrorPage';
//import { HomePage } from './pages/HomePage';

function App() {
  // const [result, url, error, loading] = useResponse(localImage);

  return (
    <Layout>
      
 {/*    
   <HomePage />
   */}
   
   <ErrorPage /> 
    </Layout>
  );
}

export default App;
