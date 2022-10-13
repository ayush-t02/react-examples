// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function ART(props) {
  return <h1>I am a { props.name }!</h1>;
}

const artex = <ART name="Ayush" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(artex);


reportWebVitals();
