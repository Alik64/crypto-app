import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Menu, Typography, Avatar } from 'antd'
import { HomeOutlined, MoneyOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../assets/images/cryptocurrency.png'

const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>CryptoWorld</Link>
                </Typography.Title>
                <Button className='menu-control-container'></Button>
            </div>
        </nav>
    )
}

export default Navbar