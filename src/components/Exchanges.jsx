import React from 'react'
import progress from '../assets/images/progress.gif'
import { Typography, Avatar } from 'antd'


const { Title } = Typography

const Exchanges = () => {
    return (
        <div className='loader'>
            <Title level={2}>This page is under construction</Title>
            <Avatar src={progress} size={100} shape="square" />
        </div>
    )
}

export default Exchanges