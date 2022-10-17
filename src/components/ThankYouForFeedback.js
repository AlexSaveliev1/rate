import React from 'react';
import { Card, Checkbox, Input, Button } from 'antd';

const { TextArea } = Input;

function ThankYouForFeedback() {
  return (
    <Card>
      <h2 style={{ textAlign: 'center' }}>Thank you for your feedback!</h2>
      <p>Please select the reason(s) for your feedback. The additional information you provide helps up improve our documentation:</p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Checkbox>Content is easy to follow</Checkbox>
        <Checkbox style={{ marginLeft: 0 }}>Solved my problem</Checkbox>
        <Checkbox style={{ marginLeft: 0, marginBottom: '10px' }}>Other</Checkbox>
      </div>

      <TextArea placeholder="Suggestions..." rows={4} />
      <Button shape="round" type="primary" size='large' style={{ marginTop: '15px' }}>
        Submit
      </Button>
    </Card>
  );
}

export default ThankYouForFeedback;