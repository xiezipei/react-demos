import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'

// const data = [
//     'do something 1',
//     'do something 2',
//     'do something 3',
// ]

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        console.log(this.state)
    }
    render() {
        return (
            <div style={{ margin: '24px' }}>
                <div>
                    <Input placeholder={ this.state.inputValue } style={{ width: '250px', marginRight: '10px' }} />
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