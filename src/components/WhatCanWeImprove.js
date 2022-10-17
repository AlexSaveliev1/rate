import React from 'react';
import { Card, Input, Button } from 'antd';

const { TextArea } = Input;

function WhatCanWeImprove() {
  return (
    <Card>
      <h3>What can we improve?</h3>
      <TextArea rows={3} />
      <Button shape="round" type="primary" size='large' style={{ marginTop: '15px' }}>
        Submit
      </Button>
    </Card>
  );
}

export default WhatCanWeImprove;