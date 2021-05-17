import React, { Component, Fragment } from 'react'

class Xiaojiejie extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <input placeholder="请输入" /><button>增加服务</button>
                </div>
                <ul>
                    <li>头部按摩</li>
                    <li>精油推背</li>
                </ul>
            </Fragment>
        )
    }
}

export default Xiaojiejie;