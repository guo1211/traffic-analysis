import React from 'react';
import { Card } from 'antd';
import './index.scss'


const GapCard = (props) => {
    const {
        content,
        ...prop
    } = props
    return (
        <div className='gap-cards-wrapper'>
            <Card
            {...prop}
            >
                {content}
            </Card>
        </div>
    )
};
export default GapCard;