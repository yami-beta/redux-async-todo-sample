import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

const AppRender = () => {
  const rootEl = document.getElementById('wrapper');
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  );
};

AppRender();

if (module.hot) {
  module.hot.accept('./containers/App', () => { AppRender() });
}
