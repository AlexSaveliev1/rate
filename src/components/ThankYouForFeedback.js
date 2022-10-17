import React from 'react';
import { Card, Checkbox, Input, Button } from 'antd';

const { TextArea } = Input;

function ThankYouForFeedback(props) {
  const { onSubmit } = props;
  const [suggestion, setSuggestion] = React.useState('');
  const [reasons, setReasons] = React.useState([]);

  const onCheckboxChange = (checkedValues) => {
    setReasons(checkedValues);
  };

  return (
    <Card>
      <h2 style={{ textAlign: 'center' }}>Thank you for your feedback!</h2>
      <p>Please select the reason(s) for your feedback. The additional information you provide helps up improve our documentation:</p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Checkbox.Group
          options={['Content is easy to follow', 'Solved my problem', 'Other']}
          onChange={onCheckboxChange}
          style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}
        />
      </div>

      <TextArea onChange={(e) => setSuggestion(e.target.value)} placeholder="Suggestions..." rows={4} />
      <Button onClick={() => onSubmit({ suggestion, reasons })} shape="round" type="primary" size='large' style={{ marginTop: '15px' }}>
        Submit
      </Button>
    </Card>
  );
}

export default ThankYouForFeedback;