import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, rootElement);
  });
}
