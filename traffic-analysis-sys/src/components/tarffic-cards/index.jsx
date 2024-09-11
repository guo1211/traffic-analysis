import React from 'react';
import { Card } from 'antd';
// import Card from '../card'
// import { Chart } from '@antv/g2';
// import ChartComponent from './mainChart'
import {
    cardsMockData
} from '../../mockData'

import './index.scss'


const TrafficCards = () => {

    const renderCardsByData = () => {
        return cardsMockData.map(item => {
            return (
                <Card
                    key={item.content}
                    title="流量统计"
                    bordered={false}
                    style={{
                        width: 300
                    }}
                >
                    <div className='card-content'>
                        {`${item.content} ${item.unit}`}
                    </div>
                </Card>
            )
        })
    }
    
    return (
        <div className='traffic-cards-wrapper'>
            {renderCardsByData()}
        </div>
    )
//   <Card
//     title="流量统计"
//     bordered={false}
//     style={{
//       width: '100%',
//     }}
//   >
//     <div>
//         <ChartComponent/>
//     </div>
//     {/* {ChartComponent} */}
//     {/* {chart.render()} */}
//   </Card>
};
export default TrafficCards;