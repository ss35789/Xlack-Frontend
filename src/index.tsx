import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {store} from './app/store';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const rootNode = document.getElementById('root');
if (!rootNode) throw new Error('Failed to find the root element');
//rootNode가 null 일 경우 에러처리
ReactDom.createRoot(rootNode).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  
    
  
);
serviceWorkerRegistration.register();
reportWebVitals();