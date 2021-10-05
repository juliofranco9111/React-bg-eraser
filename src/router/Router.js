import React, { lazy, Suspense, useContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Loading } from '../components/Loading';
import { ImageContext } from '../context/ImageContext';
import { PrivateRoute } from './PrivateRouter';

const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const ResultPage = lazy(() => import('../pages/ResultPage'));

export default function RouterComponent() {

  const {dataImg} = useContext(ImageContext)


  return (
      <Router>
        <Layout>
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/error'>
                <ErrorPage />
              </Route>
              <PrivateRoute
              exact
              path='/result'
              component={ResultPage}
              haveImage={dataImg.localImage ? true : false}
            />
            </Suspense>
          </Switch>
        </Layout>
      </Router>
  );
}
