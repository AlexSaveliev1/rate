import React from 'react';
import axios from 'axios';

import './App.css';
import RateJoke from './components/RateJoke';
import WasThisPageHelpful from './components/WasThisPageHelpful';
import WhatCanWeImprove from './components/WhatCanWeImprove';
import ThankYouForFeedback from './components/ThankYouForFeedback';

import logo from './logo.png';

const axiosInstance = axios.create({
  baseURL: 'https://feedback-api5.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '664274a239msh3e7a5dba206b776p1d005fjsn88de9429d364',
    'X-RapidAPI-Host': 'feedback-api5.p.rapidapi.com'
  }
});

function App() {
  // const [starRating, setStarRating] = React.useState(0);
  //
  // const submitStarRating = async (rating) => {
  //   setStarRating(rating);
  //
  //   const data = {
  //     rating,
  //     page: 'root'
  //   };
  //
  //   await axiosInstance.post('/feedback', data);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main-section">
        <div className="App-rate-card">
          <RateJoke/>
        </div>

        <div className="App-rate-card">
          <WasThisPageHelpful />
        </div>

        <div className="App-rate-card">
          <WhatCanWeImprove />
        </div>

        <div className="App-rate-card">
          <ThankYouForFeedback />
        </div>
      </main>
    </div>
  );
}

export default App;
