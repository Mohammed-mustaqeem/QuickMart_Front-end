import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/store.js';
import "react-toastify/ReactToastify.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>

  </BrowserRouter>
)
