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
import App from '@pages/App';
//store
import AppStatess from './store/store';

const zhiku = document.getElementById('zhiku');
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
    zhiku
  )
};
render(App)
if (module.hot) {
  module.hot.accept('./pages/App', () => {
    const NextApp = require('./pages/App').default;
    render(NextApp)
  })
}
