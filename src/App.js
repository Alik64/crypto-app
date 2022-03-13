import React from 'react'
import './App.css'

import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Exchanges, Cryptos, CryptoDetails, News } from './components'

const App = () => {
    return (

        <div className='app'>

            <div className="navbar">
                <Navbar />
            </div>


            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path='exchanges' element={<Exchanges />} />
                            <Route path='cryptos' element={<Cryptos />} />
                            <Route path='crypto/:coinId' element={<CryptoDetails />} />
                            <Route path='news' element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Paragraph style={{ color: '#fff', textAlign: 'center' }}>
                        Crypto Info <br />
                        2022 React is fun :) <br />
                        created by <a href="https://www.linkedin.com/in/albert-barsamov-2009041a0/" target="_blank" rel='noreferrer'>Albert</a>
                    </Typography.Paragraph>
                    <Space>
                        <Link to='/'> Home</Link>
                        <Link to='/exchanges'> Exchanges</Link>
                        <Link to='/news'> News</Link>
                    </Space>
                </div>
            </div>
        </div>



    )
}

export default App