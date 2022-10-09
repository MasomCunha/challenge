import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux';
//import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  {/*   <Auth0Provider
      domain="fisio.eu.auth0.com"
      clientId="Z0NBrRVust481NCjWFe9OSgLvaGUKr15"
      redirectUri={"http://localhost:3000/callback"}
    > */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
