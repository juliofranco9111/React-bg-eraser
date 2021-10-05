import React from 'react';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({
  haveImage = false,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        haveImage ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};
