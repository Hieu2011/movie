import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import common_vn from "./translations/vn/common.json";
import common_en from "./translations/en/common.json";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'vn';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: localStorage.getItem('lang') || 'vn',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      vn: {
          common: common_vn
      },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
