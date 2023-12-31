import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function tick(){
  const element = (
    <div>
      <h1> We are in PST Timezone</h1>
      <h2>CurrentTime: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(
    <React.StrictMode>
      <App />
      { element }   
    </React.StrictMode>
  );
}

setInterval(tick,1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
