import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Button, Input } from 'antd'

class TodoList extends Component {
    state = {  }
    render() { 
        return (
            <div style={{ padding: '24px' }}>
                <div>
                    <Input placeholder="write something" style={{ width: '200px' }} />
                    <Button type="primary">增加</Button>
                </div>
            </div>
        );
    }
}
 
export default TodoList;