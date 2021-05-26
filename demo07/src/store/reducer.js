/* eslint-disable import/no-anonymous-default-export */
const defaultState = {  //默认数据
    InputValue: 'Write something',
    list: [
        'dosomething 1',
        'dosomething 2',
    ]
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
    console.log(2, 'reducer');
    // 如果类型正确，传递新状态
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))    // 深拷贝
        newState.InputValue = action.InputValue
        return newState
    }
    // 否则，传递原来状态
    return state
}
