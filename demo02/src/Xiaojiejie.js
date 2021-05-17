import React, { Component, Fragment } from 'react'

class Xiaojiejie extends Component {
    // JS的构造函数，由其他函数执行
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '', // input中的值
            list: ['头部按摩', '精油推背']    // 服务列表
        }
    }
    // 输入框值改变事件
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    };
    // 增加列表
    addList() {
        this.setState({ list: [...this.state.list, this.state.inputValue] })   // 扩展运算符
        this.setState({ inputValue: '' });  // 添加完清空输入框
    }
    // 渲染模板
    render() {
        return (
            <Fragment>
                <div>
                    <input placeholder="请输入" value={ this.state.inputValue } onChange={ this.inputChange.bind(this) } />
                    <button onClick={ this.addList.bind(this) }>增加服务</button>
                </div>
                <ul>
                    { this.state.list.map((item, index) => <li key={ index }>{ item }</li>) }
                </ul>
            </Fragment>
        )
    }
}

export default Xiaojiejie;