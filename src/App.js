import React from 'react';
import { Rate } from 'antd';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rate a joke
        </p>
        <blockquote>What did the ocean say to the beach? Nothing, it just waved.</blockquote>
        <Rate />
      </header>
    </div>
  );
}

export default App;
