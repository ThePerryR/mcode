import React from 'react';
import ReactDOM from 'react-dom';
import GA4React from 'ga-4-react'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ga4react = new GA4React('G-HHY4VC82XX')

const app = new window.Realm.App({
  id: 'mcode-guru-bdomr'
});

ga4react.initialize().then((ga4) => {
  ReactDOM.render(
    <React.StrictMode>
      <App app={app} ga4={ga4}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
},(err) => {
  console.error(err)
})
