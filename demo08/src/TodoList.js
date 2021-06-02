import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() { 
        return (
            <div>
                <div>
                    <input value={ this.props.inputValue } />
                    <button>提交</button>
                </div>
                <ul>
                    <li>hello</li>
                </ul>
            </div>
        );
    }
}

// 把原来的state映射成组件中的 `props` 属性
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

// 使用 `connect` 连接器，第一个参数是映射关系
export default connect(stateToProps, null)(TodoList);