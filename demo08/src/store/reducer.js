const defaultState = {
    inputValue: 'Tonny',
    list: []
}

const d = (state = defaultState, action) => {
    // 值改变
    if (action.type === 'change_input') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    // 新增
    if (action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.inputValue) {  // 非空校验
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        }
    }

    return state;
}

export default d;