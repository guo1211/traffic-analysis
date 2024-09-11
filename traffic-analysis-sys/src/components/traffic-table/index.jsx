import React from 'react';
import { Card } from 'antd';
// import Card from '../card'
// import { Chart } from '@antv/g2';
import ChartComponent from './mainChart'

import './index.scss'
const TrafficTable = () => {
    return(
        <Card
          title="流量统计"
          bordered={false}
          style={{
            width: '100%',
          }}
        >
          <div>
              <ChartComponent/>
          </div>
          {/* {ChartComponent} */}
          {/* {chart.render()} */}
        </Card>
    )
};
export default TrafficTable;