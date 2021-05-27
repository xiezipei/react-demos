import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'

class TodoList extends Component {
    /** 构造方法 */
    constructor(props) {
        super(props)

        // 获取数据容器引用
        this.state = store.getState()

        // 绑定方法到组件
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)

        // 订阅容器状态变化
        store.subscribe(this.storeChange)
    }

    /** 容器改变事件 */
    storeChange() {
        this.setState(store.getState())
    }

    /** 输入框值改变事件 */
    changeInputValue(e) {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action);
    }

    /** 新增方法 */
    clickBtn() {
        const action = {
            type: ADD_ITEM
        }
        store.dispatch(action)
    }

    /** 删除方法 */
    deleteItem(index) {
        const action = {
            type: DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }

    /** 渲染方法 */
    render() {
        return (
            <div style={{ padding: '24px' }}>
                <h1>this.state.inputValue: {this.state.inputValue}</h1>
                <div>
                    <Input value={this.state.inputValue} placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={this.changeInputValue} />
                    <Button type="primary" onClick={this.clickBtn} style={{ marginRight: '16px' }}>增加</Button>
                </div>
                <div style={{ marginTop: '10px', width: '324px' }}>
                    <List bordered dataSource={this.state.list} renderItem={(item, index) => (
                        <List.Item>
                            {item} 
                            <Button type="text" danger onClick={this.deleteItem.bind(this, index)}>X</Button>
                        </List.Item>
                    )} />
                </div>
            </div>
        );
    }
}
export default TodoList;