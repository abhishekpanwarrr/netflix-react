import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css'
import {GlobalStyles} from './global-styles'
import { app as firebase} from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
)