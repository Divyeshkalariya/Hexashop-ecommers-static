import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById('hexashop'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const container = document.getElementById('hexashop');
const root = createRoot(container);
root.render(
  <App />
)

// reportWebVitals();
