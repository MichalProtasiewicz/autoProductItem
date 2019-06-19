import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { IntlProviderWrapper } from './IntlContext';
import { ThemeProviderWrapper } from './ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import './setupTests';
import * as serviceWorker from './serviceWorker';

import System from './System';

ReactDOM.render(
  <>
    <CssBaseline />
    <HelmetProvider>
      <IntlProviderWrapper>
        <ThemeProviderWrapper>
          <Router>
            <System />
          </Router>
        </ThemeProviderWrapper>
      </IntlProviderWrapper>
    </HelmetProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
