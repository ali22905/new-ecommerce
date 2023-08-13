import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
          </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
