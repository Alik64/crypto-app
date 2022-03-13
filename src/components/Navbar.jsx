import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Button, Menu, Typography, Avatar } from 'antd'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../assets/images/cw.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const handleMenu = () => {
        if (screenSize > 768) {
            return setActiveMenu(true);
        }
        setActiveMenu(false)
    }
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <h1 className="logo"><Link style={{ color: '#1890ff' }} to="/">Info Crypto</Link></h1>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
            {activeMenu && (
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    onClick={handleMenu}
                >
                    <Menu.Item key='1' icon={<HomeOutlined />}>
                        <Link to="/" >Home</Link>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<FundOutlined />}>
                        <Link to="/cryptos">Cryptos</Link>
                    </Menu.Item>
                    <Menu.Item key='3' icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges" >Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item key='4' icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    );
};

export default Navbar;