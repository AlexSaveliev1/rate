import React from 'react';
import { Card, Rate } from 'antd';

function RateJoke() {
  return (
    <Card title="Rate a joke of the day">
      <blockquote>What did the ocean say to the beach? Nothing, it just waved.</blockquote>
      <Rate value={1} onChange={() => {}} />
    </Card>
  );
}

export default RateJoke;