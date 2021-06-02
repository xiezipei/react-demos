import React, { Component } from 'react';
import store from './store/index'
import { getMyListAction, changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

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
        this.deleteItem = this.deleteItem.bind(this)

        // 订阅容器状态变化
        store.subscribe(this.storeChange)
    }

    componentDidMount() {
        const action = getMyListAction()
        store.dispatch(action)
        console.log(action)
    }

    /** 容器改变事件 */
    storeChange() {
        this.setState(store.getState())
    }

    /** 输入框值改变事件 */
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action);
    }

    /** 新增方法 */
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    /** 删除方法 */
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    /** 获取列表数据方法 */
    getList() {
        axios.get('https://easy-mock.bookset.io/mock/60a3753447ef9e51d0ad2a87/react-demo/list/get').then(res => {
            const action = getListAction(res.data.data.list)
            store.dispatch(action)
        });
    }

    /** 渲染方法 */
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list= {this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
}
export default TodoList;