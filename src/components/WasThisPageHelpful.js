import React from 'react';
import { Card, Button } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

function WasThisPageHelpful() {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3>Was this page helpful?</h3>
        <div style={{ display: 'flex' }}>
          <Button shape="round" type="primary" icon={<CheckOutlined /> } size='large' style={{ marginRight: '10px' }}>
            Yes
          </Button>

          <Button shape="round" type="primary" icon={ <CloseOutlined /> } size='large'>
            No
          </Button>
        </div>
      </div>


    </Card>
  );
}

export default WasThisPageHelpful;