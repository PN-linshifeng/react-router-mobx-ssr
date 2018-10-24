import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter
} from "react-router-dom";
import {
  AppContainer
} from 'react-hot-loader';
import {
  Provider
} from 'mobx-react';
import App from '@container/App';
//store
import AppStatess from './store/store';

const initialState = window.__INITIAL__STATE__ || {};
let appInit = AppStatess(initialState)
console.log(appInit)
const render = (Container) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider {...appInit}>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('zhiku'),
  )
};
render(App)
if (module.hot) {
  module.hot.accept('./container/App', () => {
    const NextApp = require('./container/App').default;
    render(NextApp)
  })
}
