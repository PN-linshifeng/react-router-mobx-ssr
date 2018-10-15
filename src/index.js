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
import appState from './store/appState';


const render = (Container) => {
  ReactDOM.render(
    <AppContainer>
      <Provider appState={appState}>
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
    // console.log(8585)
    const NextApp = require('./container/App').default;
    render(NextApp)
  })
}
