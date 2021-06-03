import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import '../index.css'
import Problem from './workplace/Problem'

class Workplace extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div><h3>二级导航</h3></div>
                <div className="topNav">
                    <ul>
                        <li><Link to="/workplace/problem">problem</Link></li>
                    </ul>
                </div>
                <div className="videoContent">
                    <Route path="/workplace/problem" component={ Problem } />
                </div>
            </div>
        );
    }
}
 
export default Workplace;