import React from 'react';
import { Card, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

function WasThisPageHelpful() {
  return (
    <Card>
      <span>Was this page helpful?</span>
      <Button shape="round" type="primary" icon={<CheckOutlined /> } size='large'>
        Yes
      </Button>

      <Button shape="round" type="primary" icon={<CheckOutlined /> } size='large'>
        No
      </Button>
    </Card>
  );
}

export default WasThisPageHelpful;