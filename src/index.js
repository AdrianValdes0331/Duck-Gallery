import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-f8h9nhgl.us.auth0.com" 
      clientId="vPV8OZ8f5ngo2f4oCejlUKKdHCkgoG08" 
      redirectUri={window.location.origin}
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA