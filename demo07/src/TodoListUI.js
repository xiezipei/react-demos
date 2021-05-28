import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{ padding: '24px' }}>
            <div style={{ marginBottom: '8px' }}><i>his.state.inputValue</i>: {props.inputValue}</div>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                    style={{ marginRight: '16px' }}
                >增加</Button>
            </div>
            <div style={{ marginTop: '10px', width: '324px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item>
                            {item}
                            <Button 
                                type="text"
                                danger
                                onClick={() => props.deleteItem(index)}
                            >X</Button>
                        </List.Item>
                    )} />
            </div>
        </div>
    );
}
export default TodoListUI;