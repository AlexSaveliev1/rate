import React from 'react';
import { Card, Rate } from 'antd';

function RateJoke(props) {
  const { onSubmit } = props;

  return (
    <Card title="Rate a joke of the day">
      <blockquote>What did the ocean say to the beach? Nothing, it just waved.</blockquote>
      <Rate onChange={(rating) => onSubmit({ rating })} />
    </Card>
  );
}

export default RateJoke;