import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.jsx'
import { SearchProvider } from './filter/Search.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Auth0Provider } from '@auth0/auth0-react';  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-z1s0w0hr43qquov7.us.auth0.com"
    clientId="tKwHET1d61GGjCMJobg8a8mQfXbtg5wT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <Provider store={Store}>
      <SearchProvider>

    <App />
      </SearchProvider>
    </Provider>
  </React.StrictMode>,
  </Auth0Provider>
)
