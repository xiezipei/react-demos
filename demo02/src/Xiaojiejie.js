import React, { Component, Fragment } from 'react'

class Xiaojiejie extends Component {
    // JS的构造函数，由其他函数执行
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '', // input中的值
            list: []    // 服务列表
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input placeholder="请输入" value={ this.state.inputValue } /><button>增加服务</button>
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