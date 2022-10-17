import React from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import './App.css';
import logo from './logo.png';

import RateJoke from './components/RateJoke';
import WasThisPageHelpful from './components/WasThisPageHelpful';
import WhatCanWeImprove from './components/WhatCanWeImprove';
import ThankYouForFeedback from './components/ThankYouForFeedback';

const axiosInstance = axios.create({
  baseURL: 'https://feedback-api5.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '664274a239msh3e7a5dba206b776p1d005fjsn88de9429d364',
    'X-RapidAPI-Host': 'feedback-api5.p.rapidapi.com'
  }
});

function App() {
  const openSuccessNotification = () => {
    notification.open({
      message: 'Thank you!',
      description: 'We appreciate your feedback.',
      icon: <SmileOutlined style={{ color: '#3BD158' }} />,
    });
  };

  const submitFeedback = async (feedback) => {
    const data = {
      ...feedback,
      page: 'root'
    };

    await axiosInstance.post('/feedback', data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main-section">
        <div className="App-card-wrapper">
          <RateJoke />
        </div>

        <div className="App-card-wrapper">
          <WasThisPageHelpful />
        </div>

        <div className="App-card-wrapper">
          <WhatCanWeImprove />
        </div>

        <div className="App-card-wrapper">
          <ThankYouForFeedback />
        </div>
      </main>
    </div>
  );
}

export default App;
