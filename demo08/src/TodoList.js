import React from 'react';
import { connect } from 'react-redux'

// 由于把业务逻辑剥离了，可以写成UI组件（也就是无状态组件）
const TodoList = (props) => {
    let { inputValue, inputChange, clickButton, list, deleteItem } = props;
    return (
        <div>
            <div>
                <input value={ inputValue } onChange={ inputChange } />
                <button onClick={ clickButton }>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={ index }>
                                { item }
                                <button onClick={ deleteItem(item) }>X</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        // 输入框值改变事件
        inputChange(e) {
            let action = { type: 'change_input', value: e.target.value }
            dispatch(action)
        },
        // 按钮新增事件
        clickButton() {
            let action = { type: 'add_item' }
            dispatch(action)
        },
        // @Todo 按钮删除事件
        deleteItem(index) {
            // let action = { type: 'delete_item' }
            // dispatch(action)
            console.log(index)
        },
    }
}

// connect的作用：
// 1. 把UI组件（无状态组件）和业务逻辑代码分开，
// 2. 然后通过connect再连接在一起，让代码更加清晰和易于维护
export default connect(stateToProps, dispatchToProps)(TodoList);