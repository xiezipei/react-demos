import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'

class TodoList extends Component {
    constructor(props) {
        super(props)

        // 获取 `state` 对象
        this.state = store.getState()

        // 绑定输入框值变化方法
        this.changeInputValue = this.changeInputValue.bind(this)

        // 转变this指向
        this.storeChange = this.storeChange.bind(this)

        // 订阅 redux 状态
        store.subscribe(this.storeChange)
    }
    storeChange(){
        console.log(3, 'storeChange');
        // 用了组件的 setState 方法
        this.setState(store.getState())
    }
    changeInputValue(e) {
        console.log(1, 'changeInputValue');
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action); // 通过 `dispatch()` 方法把数据传递给 `store`
    }
    render() {
        return (
            <div style={{ margin: '24px' }}>
                <div>
                    <Input 
                        placeholder={ this.state.inputValue }
                        style={{ width: '250px', marginRight: '10px' }} 
                        onChange={ this.changeInputValue }
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ marginTop: '10px', width: '324px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;