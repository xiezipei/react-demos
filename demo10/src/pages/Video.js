import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Angular from './video/Angular'
import Vue from './video/Vue'
import Flutter from './video/Flutter'
import '../index.css'

class Video extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div><h3>视频教程</h3></div>
                <div className="topNav">
                    <ul>
                        <li><Link to="/video/angular">angular</Link></li>
                        <li><Link to="/video/vue">vue</Link></li>
                        <li><Link to="/video/flutter">flutter</Link></li>
                    </ul>
                </div>
                <div className="videoContent">
                    <Route path="/video/angular/" component={ Angular } />
                    <Route path="/video/vue/" component={ Vue } />
                    <Route path="/video/flutter/" component={ Flutter } />
                </div>
            </div>
        );
    }
}
 
export default Video;