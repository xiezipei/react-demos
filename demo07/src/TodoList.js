import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const data = [
    'do something 1',
    'do something 2',
    'do something 3',
    'do something 4',
    'do something 5',
]

class TodoList extends Component {
    render() {
        return (
            <div style={{ margin: '24px' }}>
                <div>
                    <Input placeholder='write someting' style={{ width: '250px', marginRight: '10px' }} />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ marginTop: '10px', width: '324px' }}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;