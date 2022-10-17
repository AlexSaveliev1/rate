import React from 'react';
import axios from 'axios';
import { notification, Alert } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import './App.css';
import logo from './logo.png';

import RatingExample from './components/RatingExample';
import LikeDislikeExample from './components/LikeDislikeExample';
import SuggestionExample from './components/SuggestionExample';
import CombinedExample from './components/CombinedExample';

const axiosInstance = axios.create({
  baseURL: 'https://feedback-api5.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '664274a239msh3e7a5dba206b776p1d005fjsn88de9429d364',
    'X-RapidAPI-Host': 'feedback-api5.p.rapidapi.com'
  }
});

const LOCAL_STORAGE_KEYS_FEEDBACK_MAP_KEY = 'feedback';
const LOCAL_STORAGE_FEEDBACK_KEYS = {
  rating: 'rating',
  sentiment: 'sentiment',
  suggestion: 'suggestion',
  combined: 'combined'
};

const getLocalStorageFeedbackData = () => {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS_FEEDBACK_MAP_KEY)
  );
}

const setLocalStorageFeedbackData = (subkey, feedback) => {
  localStorage.setItem(
    'feedback',
    JSON.stringify(
      Object.assign(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_FEEDBACK_MAP_KEY)) || {},
        { [subkey]: feedback }
      )
    )
  );
};

function App() {
  const [feedbackData, setFeedbackData] = React.useState(getLocalStorageFeedbackData() || {});

  const refreshFeedback = () => {
    setFeedbackData(getLocalStorageFeedbackData() || {})
  };

  console.log(feedbackData, 'feedback');

  const openSuccessNotification = () => {
    notification.open({
      message: 'Thank you!',
      description: 'We appreciate your feedback.',
      icon: <SmileOutlined style={{ color: '#3BD158' }} />,
    });
  };

  const submitFeedback = async (feedback, subkey) => {
    const data = { ...feedback, page: 'root' };
    console.log('Submit feedback', data);

    try {
      const { data: createdFeedback } = await axiosInstance.post('/feedback', data);
      console.log(createdFeedback, 'createdFeedback')

      setLocalStorageFeedbackData(subkey, { ...feedback, id: createdFeedback.id });
      refreshFeedback();
      openSuccessNotification();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main-section">
        <Alert
          showIcon
          type="info"
          message="The examples below represent various ways you can interact with our Feedback API. Feel free to practice."
          style={{ marginBottom: '15px' }}
        />

        <div className="App-main-section-example-wrapper">
          <RatingExample data={feedbackData.rating} onSubmit={(rating) => submitFeedback(rating, LOCAL_STORAGE_FEEDBACK_KEYS.rating)} />
        </div>
        <div className="App-main-section-example-wrapper">
          <LikeDislikeExample data={feedbackData.sentiment} onSubmit={(sentiment) => submitFeedback(sentiment, LOCAL_STORAGE_FEEDBACK_KEYS.sentiment)} />
        </div>
        <div className="App-main-section-example-wrapper">
          <SuggestionExample data={feedbackData.suggestion} onSubmit={(suggestion) => submitFeedback(suggestion, LOCAL_STORAGE_FEEDBACK_KEYS.suggestion)} />
        </div>
        <div className="App-main-section-example-wrapper">
          <CombinedExample data={feedbackData.combined} onSubmit={(combinedFeedback) => submitFeedback(combinedFeedback, LOCAL_STORAGE_FEEDBACK_KEYS.combined)} />
        </div>
      </main>
    </div>
  );
}

export default App;
