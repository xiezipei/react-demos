import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

/* eslint-disable import/no-anonymous-default-export */
const defaultState = {  //默认数据
    inputValue: '',
    list: []
}

/**
 * store只是一个仓库，并没有管理能力，
 * 它会把接收到的 action 自动转发给 reducer。
 * 
 * 这里有两个参数：
 * - state：指的是原始仓库里的状态
 * - action：指的是 action 新传递的状态
 * 
 * 要记住：reducer 里只能接收 state，不能改变 state
 */
export default (state = defaultState, action)=>{  //就是一个方法函数
    // 输入框值变化
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    // 新增
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        if (!newState.inputValue) {
            return state
        }
        newState.inputValue = ''
        return newState
    }

    // 删除
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)   // 利用 `splice` 删除数组元素
        return newState
    }

    return state
}
