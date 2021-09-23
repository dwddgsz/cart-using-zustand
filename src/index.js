import React from 'react';
import ReactDOM from 'react-dom';
import useStore from './store/Store';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('useStore',useStore);
}

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
)