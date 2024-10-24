import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from 'react-modal';  // استيراد react-modal

Modal.setAppElement("#root");  // تأكد من استخدام setAppElement هنا

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
