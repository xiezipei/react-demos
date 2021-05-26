/* eslint-disable import/no-anonymous-default-export */
const defaultState = {  //默认数据
    InputValue: 'Write something',
    list: [
        'dosomething 1',
        'dosomething 2',
    ]
}

export default (state = defaultState, action)=>{  //就是一个方法函数
    return state
}
