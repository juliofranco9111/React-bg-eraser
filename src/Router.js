import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Loading } from './components/Loading';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ResultPage = lazy(() => import('./pages/ResultPage'));

export default function RouterComponent() {
  return (
      <Router>
        <Layout>
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/result'>
                <ResultPage />
              </Route>
              <Route exact path='/error'>
                <ErrorPage />
              </Route>
            </Suspense>
          </Switch>
        </Layout>
      </Router>
  );
}
