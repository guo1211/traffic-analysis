import React from 'react';
import { Card } from 'antd';
import './index.scss'
const App = (props) => (
  <Card
    // title="Card title"
    // bordered={false}
    // style={{
    //   width: 300,
    // }}
    {...props}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
export default App;