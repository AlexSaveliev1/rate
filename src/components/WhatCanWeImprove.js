import React from 'react';
import { Card, Input, Button } from 'antd';

const { TextArea } = Input;

function WhatCanWeImprove(props) {
  const { onSubmit } = props;
  const [suggestion, setSuggestion] = React.useState('');

  return (
    <Card>
      <h3>What can we improve?</h3>
      <TextArea onChange={(e) => setSuggestion(e.target.value)} rows={3} />
      <Button onClick={() => onSubmit({ suggestion })} shape="round" type="primary" size='large' style={{ marginTop: '15px' }}>
        Submit
      </Button>
    </Card>
  );
}

export default WhatCanWeImprove;