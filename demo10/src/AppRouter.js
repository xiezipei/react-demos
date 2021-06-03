import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
import './index.css'

function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">博客首页</Link></li>
                        <li><Link to="">视频教程</Link></li>
                        <li><Link to="">职场技能</Link></li>
                    </ul>
                </div>
            </div>
            <div className="rightMain">
                <Route path="/" exact component={ Index }></Route>
            </div>
        </Router>
    )
}

export default AppRouter