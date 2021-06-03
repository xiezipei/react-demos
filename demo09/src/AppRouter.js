import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index'
import List from './pages/List'
import Home from './pages/Home';

class AppRouter extends Component {
    state = {  }
    render() { 
        return (
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/123">列表</Link></li>
                </ul>
                {/* exact = 精准匹配 */}
                <Route path="/" exact component={ Index } />
                <Route path="/list/:id" exact component={ List } />
                <Route path="/home/" component={ Home } />
            </Router>
        );
    }
}
 
export default AppRouter;