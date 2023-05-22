import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyleProvider } from './styles/style-provider';
import "./index.css";

ReactDOM.render(
  <>
    <StyleProvider>
      <App />
    </StyleProvider>
  </>,
  document.getElementById("root"),
);