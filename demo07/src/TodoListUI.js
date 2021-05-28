import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
    state = {}
    render() {
        return (
            <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '8px' }}><i>his.state.inputValue</i>: {this.props.inputValue}</div>
                <div>
                    <Input
                        value={this.props.inputValue}
                        placeholder={this.props.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.props.changeInputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.props.clickBtn}
                        style={{ marginRight: '16px' }}
                    >增加</Button>
                </div>
                <div style={{ marginTop: '10px', width: '324px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item>
                                {item}
                                <Button 
                                    type="text"
                                    danger
                                    onClick={() => this.props.deleteItem(index)}
                                >X</Button>
                            </List.Item>
                        )} />
                </div>
            </div>
        );
    }
}
export default TodoListUI;