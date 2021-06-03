// 默认状态
const defaultState = {
    inputValue: 'Tonny',
    list: []
}

// 处理器
const d = (state = defaultState, action) => {
    // 动作类型 1、输入框值改变
    if (action.type === 'change_input') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    // 动作类型 2、新增待办
    if (action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.inputValue) {  // 非空校验
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        }
    }

    // 动作类型 3、删除待办
    if (action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.inputValue) {  // 非空校验
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        }
    }

    // 默认返回当前 state
    return state;
}

export default d;