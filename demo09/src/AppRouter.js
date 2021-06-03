import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index'
import List from './pages/List'

class AppRouter extends Component {
    state = {  }
    render() { 
        return (
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                {/* exact = 精准匹配 */}
                <Route path="/" exact component={ Index } />
                <Route path="/list/" exact component={ List } />
            </Router>
        );
    }
}
 
export default AppRouter;