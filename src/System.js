import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Routes from './routes';

const System = () => {
  console.log(`ENV: `, process.env);
  return (
    <Switch>
      {Routes.PUBLIC_ROUTES.map(({ path, exact, name, component }) => {
        return (
          <Route
            key={name}
            path={path}
            exact={exact}
            name={name}
            component={component}
          />
        );
      })}
      {Routes.USER_ROUTES.map(({ path, exact, name, component }) => {
        return (
          <Route
            key={name}
            path={path}
            exact={exact}
            name={name}
            component={component}
          />
        );
      })}
      {Routes.ADMIN_ROUTES.map(({ path, exact, name, component }) => {
        return (
          <Route
            key={name}
            path={path}
            exact={exact}
            name={name}
            component={component}
          />
        );
      })}
      {Routes.OTHER_ROUTES.map(({ path, exact, name, component }) => {
        return (
          <Route
            key={name}
            path={path}
            exact={exact}
            name={name}
            component={component}
          />
        );
      })}
    </Switch>
  );
};

export default System;
